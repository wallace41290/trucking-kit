import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { inject } from '@angular/core';
import { CompanyService } from '@trucking-kit/company/data-access';
import { Company, RequestError } from '@shared/models';

@Component({
  selector: 'tk-companies',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css',
})
export class CompaniesComponent {
  companyService = inject(CompanyService);
  createForm: FormGroup;
  updateForm: FormGroup;

  companies$ = signal<Company[]>([]);
  creatingCompany$ = signal(false);
  currentCompany$ = signal<Company | null>(null);
  error$ = signal('');
  loadingCompanies$ = signal(false);
  updatingCompany$ = signal(false);

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      companyName: ['', Validators.required],
      dotNumber: ['', Validators.required],
    });
    this.updateForm = this.fb.group({
      companyName: ['', Validators.required],
      dotNumber: ['', Validators.required],
    });

    this.fetchCompanies();
  }

  public onEdit(dotNumber: string) {
    const someCompany = this.companies$().find(
      (company) => company.dotNumber === dotNumber
    );
    if (someCompany) {
      this.currentCompany$.set(someCompany);
      this.updateForm = this.fb.group({
        companyName: [someCompany.companyName, Validators.required],
        dotNumber: [someCompany.dotNumber, Validators.required],
      });
    }
  }

  public async onCreate(company: Company) {
    this.error$.set('');
    this.creatingCompany$.set(true);

    const newCompany = {
      companyName: company.companyName,
      city: 'Knoxville',
      state: 'TN',
      streetAddress: '123 First Ave',
      zipCode: 27384,
      dotNumber: company.dotNumber,
    };

    this.companyService.createCompany(newCompany).subscribe({
      next: (results) => {
        this.companies$.set([...this.companies$(), results.data.createCompany]);
        console.log('Companies Component - GraphQL response', results);
        this.creatingCompany$.set(false);
      },
      error: (e) => {
        console.error('error creating company', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.creatingCompany$.set(false);
      },
    });
  }

  public async onDelete(companyDot: string) {
    this.error$.set('');

    this.companyService.deleteCompany(companyDot).subscribe({
      next: (results) => {
        this.companies$.set(
          this.companies$().filter(
            (company) => company.dotNumber !== companyDot
          )
        );
        console.log('Companies Component - GraphQL response', results);
      },
      error: (e) => {
        console.error('error deleting company', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
      },
    });
  }

  public async onUpdate(company: Company) {
    this.error$.set('');
    this.updatingCompany$.set(true);

    const updatedCompany = {
      companyName: company.companyName,
      city: 'Knoxville',
      state: 'TN',
      streetAddress: '123 First Ave',
      zipCode: 27384,
      dotNumber: company.dotNumber,
    };

    this.companyService.updateCompany(updatedCompany).subscribe({
      next: (results) => {
        this.companies$.set(
          this.companies$().map((company) => {
            if (company.dotNumber === results.data.updateCompany.dotNumber) {
              return results.data.updateCompany;
            } else {
              return company;
            }
          })
        );
        console.log('Companies Component - GraphQL response', results);
        this.updatingCompany$.set(false);
      },
      error: (e) => {
        console.error('error creating company', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.updatingCompany$.set(false);
      },
    });
  }

  private async fetchCompanies() {
    this.error$.set('');
    this.loadingCompanies$.set(true);

    this.companyService.fetchCompanies().subscribe({
      next: (results) => {
        this.companies$.set(results.data.listCompanies.items);
        this.loadingCompanies$.set(false);
      },
      error: (e) => {
        console.error('error fetching companies', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.loadingCompanies$.set(false);
      },
    });
  }

  private isRequestError(something: unknown): something is RequestError {
    return (
      !!something &&
      typeof something === 'object' &&
      'errors' in something &&
      Array.isArray(something.errors)
    );
  }
}
