import { Injectable, computed, inject, signal } from '@angular/core';
import { CompanyState, companyInitialState } from './company.model';
import { Company } from '@shared/models';
import { CompanyService } from './services/company.service';

@Injectable({ providedIn: 'root' })
export class CompanyStore {
  protected state$ = signal<CompanyState>(companyInitialState);
  protected service = inject(CompanyService);

  $companies = computed(() => this.state$().companies);
  $company = computed(() => this.state$().selected);
  $creating = computed(() => this.state$().creating);
  $fetching = computed(() => this.state$().fetching);
  $loading = computed(() => this.state$().loading);
  $removing = computed(() => this.state$().removing);
  $updating = computed(() => this.state$().updating);

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

  get(dotNumber: string) {
    this.state$.update((s) => ({ ...s, loading: true, selected: undefined }));
    this.service.getCompany(dotNumber).subscribe({
      next: (res) =>
        this.state$.update((s) => ({
          ...s,
          loading: false,
          selected: res.data.getCompany,
        })),
      error: this.errorHandler((s) => ({ ...s, loading: false })),
    });
  }

  update(changes: Partial<Company> & Required<Pick<Company, 'dotNumber'>>) {
    this.state$.update((s) => ({ ...s, updating: true }));
    const company = this.state$().selected ?? ({} as Company);
    this.service.updateCompany({ ...company, ...changes }).subscribe({
      next: (res) => {
        const updated = res.data.updateCompany;
        this.state$.update((s) => ({
          ...s,
          selected: updated,
          companies: s.companies.map((c) =>
            c.dotNumber === updated.dotNumber ? updated : c
          ),
        }));
      },
      error: this.errorHandler((s) => ({ ...s, updating: false })),
    });
  }

  protected errorHandler(
    updateFn?: (s: CompanyState) => CompanyState
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): (err: any) => void {
    return (err) => {
      console.error(err);
      if (updateFn) {
        this.state$.update(updateFn);
      }
    };
  }
}
