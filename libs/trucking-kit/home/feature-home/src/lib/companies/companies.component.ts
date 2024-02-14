import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { inject } from '@angular/core';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
// import * as Queries from '@shared/backend/graphql/queries';
import * as Mutations from '@shared/backend/graphql/mutations';
import { CompanyService } from '@trucking-kit/company/data-access';
import {
  Company,
  CreateCompanyQuery,
  // ListCompaniesQuery,
  RequestError,
} from '@shared/models';

@Component({
  selector: 'tk-companies',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css',
})
export class CompaniesComponent {
  client = generateClient();
  createForm: FormGroup;

  companies$ = signal<Company[]>([]);
  creatingCompany$ = signal(false);
  error$ = signal('');
  loadingCompanies$ = signal(false);
  companyService = inject(CompanyService);

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      companyName: ['', Validators.required],
      dotNumber: ['', Validators.required],
    });

    this.fetchCompanies();
  }

  public async onCreate(company: Company) {
    this.error$.set('');
    this.creatingCompany$.set(true);
    try {
      const newCompany = {
        companyName: company.companyName,
        city: 'Knoxville',
        state: 'TN',
        streetAddress: '123 First Ave',
        zipCode: 27384,
        dotNumber: company.dotNumber,
      };

      const response = (await this.client.graphql({
        query: Mutations.createCompany,
        variables: {
          input: newCompany,
        },
      })) as GraphQLResult<CreateCompanyQuery>;

      console.log('Companies Component - GraphQL response', response);
      this.companies$.set([...this.companies$(), response.data.createCompany]);
    } catch (e) {
      console.error('error creating company...', e);
      if (this.isRequestError(e) && e.errors.length) {
        this.error$.set(e.errors[0].message);
      }
    } finally {
      this.creatingCompany$.set(false);
    }
  }

  private async fetchCompanies() {
    this.error$.set('');
    this.loadingCompanies$.set(true);
    try {
      this.companyService.fetchCompanies().subscribe((results) => {
        this.companies$.set(results.data.listCompanies.items);
      });
    } catch (e: unknown) {
      console.error('error fetching companies', e);
      if (this.isRequestError(e) && e.errors.length) {
        this.error$.set(e.errors[0].message);
      }
    } finally {
      this.loadingCompanies$.set(false);
    }
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
