import { Injectable, computed, inject, signal } from '@angular/core';
import { CompanyState, companyInitialState } from './company.model';
import { Company } from '@shared/models';
import { CompanyService } from './services/company.service';

@Injectable({ providedIn: 'root' })
export class CompanyStore {
  protected state$ = signal<CompanyState>(companyInitialState);
  protected service = inject(CompanyService);

  /** List of all available companies. */
  $companies = computed(() => this.state$().companies);
  /** ID of the company currently viewing/editing */
  $dotNumber = computed(() => this.state$().dotNumber);
  /** Whether a new company is being created. */
  $creating = computed(() => this.state$().creating);
  /** Whether currently fetching all companies. */
  $fetching = computed(() => this.state$().fetching);
  /** Whether loading the desired company. */
  $loading = computed(() => this.state$().loading);
  /** Whether removing the desired company. */
  $removing = computed(() => this.state$().removing);
  /** Whether updating the desired company. */
  $updating = computed(() => this.state$().updating);

  /** The currently selected company for view/edit. */
  $company = computed(() =>
    this.$companies().find((c) => c.dotNumber === this.$dotNumber())
  );

  /**
   * Creates a new company.
   * @param company The required information to create a company.
   */
  create(company: Company) {
    this.state$.update((s) => ({ ...s, creating: true }));
    this.service.createCompany(company).subscribe({
      next: (result) =>
        this.state$.update((s) => ({
          ...s,
          creating: false,
          companies: s.companies.concat(result.data.createCompany),
        })),
      error: this.errorHandler((s) => ({ ...s, creating: false })),
    });
  }

  /**
   * Deletes the company associated with the given dotNumber.
   * @param dotNumber ID of the company to delete.
   */
  delete(dotNumber: string) {
    this.state$.update((s) => ({ ...s, removing: dotNumber }));
    this.service.deleteCompany(dotNumber).subscribe({
      next: () =>
        this.state$.update((s) => ({
          ...s,
          removing: undefined,
          companies: s.companies.filter((c) => c.dotNumber !== dotNumber),
        })),
      error: this.errorHandler((s) => ({ ...s, removing: undefined })),
    });
  }

  /**
   * Retrieves all the available companies.
   */
  fetchAll() {
    this.state$.update((s) => ({ ...s, fetching: true }));
    this.service.fetchCompanies().subscribe({
      next: (res) =>
        this.state$.update((s) => ({
          ...s,
          fetching: false,
          companies: res.data.listCompanies.items,
        })),
      error: this.errorHandler((s) => ({ ...s, fetching: false })),
    });
  }

  /**
   * Sets the given dotNumber as selected, and retrieves the associated company if not yet stored.
   * @param dotNumber
   */
  get(dotNumber: string) {
    const index = this.$companies().findIndex((c) => c.dotNumber === dotNumber);
    if (index > -1) {
      this.state$.update((s) => ({ ...s, dotNumber }));
    } else {
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
            dotNumber: res.data.getCompany.dotNumber,
            companies: [...s.companies, res.data.getCompany],
          })),
        error: this.errorHandler((s) => ({ ...s, loading: false })),
      });
    }
  }

  /**
   * Updates the associated company with the provided changes.
   * @param changes Properties to change on the company, as well as the dotNumber associated with it.
   */
  update(changes: Partial<Company> & Required<Pick<Company, 'dotNumber'>>) {
    this.state$.update((s) => ({ ...s, updating: true }));
    const company = this.$company() ?? ({} as Company);
    this.service.updateCompany({ ...company, ...changes }).subscribe({
      next: (res) => {
        const updated = res.data.updateCompany;
        this.state$.update((s) => ({
          ...s,
          companies: s.companies.map((c) =>
            c.dotNumber === updated.dotNumber ? updated : c
          ),
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
