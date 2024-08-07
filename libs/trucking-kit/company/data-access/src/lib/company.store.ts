import { Injectable, computed, inject, signal } from '@angular/core';
import { CompanyState, companyInitialState } from './company.model';
import { Company } from '@shared/models';
import { CompanyService } from './services/company.service';

@Injectable({ providedIn: 'root' })
export class CompanyStore {
  protected state$ = signal<CompanyState>(companyInitialState);
  protected service = inject(CompanyService);

  /** List of all available companies. */
  $company = computed(() => this.state$().company);
  /** Whether loading the desired company. */
  $loading = computed(() => this.state$().loading);
  /** Whether removing the desired company. */
  $removing = computed(() => this.state$().removing);
  /** Whether updating the desired company. */
  $updating = computed(() => this.state$().updating);

  /**
   * Deletes the company associated with the given dotNumber.
   * @param dotNumber ID of the company to delete.
   */
  delete(dotNumber: string) {
    this.state$.update((s) => ({ ...s, removing: true }));
    this.service.deleteCompany(dotNumber).subscribe({
      next: () => this.state$.update(() => companyInitialState),
      error: this.errorHandler((s) => ({ ...s, removing: false })),
    });
  }

  /**
   * Retrieves the company with the associated dotNumber.
   * @param dotNumber
   */
  get(dotNumber: string) {
    this.state$.update((s) => ({
      ...s,
      loading: true,
      dotNumber: undefined,
    }));
    this.service.getCompany(dotNumber).subscribe({
      next: (res) =>
        this.state$.update((s) => ({
          ...s,
          loading: false,
          company: res.data.getCompany,
        })),
      error: this.errorHandler((s) => ({ ...s, loading: false })),
    });
  }

  /**
   * Updates the company with the provided changes.
   * @param changes Properties to change on the company, as well as the dotNumber associated with it.
   */
  update(changes: Partial<Company> & Required<Pick<Company, 'dotNumber'>>) {
    this.state$.update((s) => ({ ...s, updating: true }));
    const company = this.$company() ?? ({} as Company);
    this.service.updateCompany({ ...company, ...changes }).subscribe({
      next: (res) => {
        this.state$.update((s) => ({
          ...s,
          company: res.data.updateCompany,
        }));
      },
      error: this.errorHandler((s) => ({ ...s, updating: false })),
    });
  }

  /**
   * General function for handling api failures.
   * Updates the state with the given function.
   * @param updateFn
   * @returns
   */
  protected errorHandler(
    updateFn?: (s: CompanyState) => CompanyState
  ): (err: unknown) => void {
    return (err) => {
      console.error(err);
      if (updateFn) {
        this.state$.update(updateFn);
      }
    };
  }
}
