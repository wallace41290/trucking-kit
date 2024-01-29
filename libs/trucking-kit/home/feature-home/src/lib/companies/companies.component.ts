import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import * as Queries from '@shared/backend/graphql/queries';
import * as Mutations from '@shared/backend/graphql/mutations';

export type Company = {
  city: string;
  companyName: string;
  dotNumber: string;
  state: string;
  streetAddress: string;
  zipCode: number;
};

export type ListCompaniesQuery = {
  listCompanies: ListCompaniesQueryResult;
};

export type ListCompaniesQueryResult = {
  items: Company[];
};

export type CreateCompanyQuery = {
  createCompany: Company;
};

interface RequestError {
  data: unknown;
  errors: Error[];
}

interface Error {
  data: unknown;
  errorInfo: string;
  errorType: string;
  locations: unknown;
  message: string;
  path: unknown;
}

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
      const response = (await this.client.graphql({
        query: Queries.listCompanies,
      })) as GraphQLResult<ListCompaniesQuery>;
      this.companies$.set(response.data.listCompanies.items);
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
