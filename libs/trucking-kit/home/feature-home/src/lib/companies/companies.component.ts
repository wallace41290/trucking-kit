import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
// import { mutations } from '@tr'

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

@Component({
  selector: 'tk-companies',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css',
})
export class CompaniesComponent implements OnInit {
  client = generateClient();
  companies: Company[] = [];
  public createForm: FormGroup;
  graphqlQueries = require('../../../../../../../apps/trucking-kit/src/graphql/queries.js');
  mutations = require('../../../../../../../apps/trucking-kit/src/graphql/mutations.js');

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      companyName: ['', Validators.required],
      dotNumber: ['', Validators.required],
    });
  }

  public async onCreate(company: Company) {
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
        query: this.mutations.createCompany,
        variables: {
          input: newCompany,
        },
      })) as GraphQLResult;

      console.log('Companies Component - GraphQL response', response);
    } catch (e) {
      console.log('error creating company...', e);
    }
  }

  async ngOnInit() {
    try {
      const response = (await this.client.graphql<GraphQLResult>({
        query: this.graphqlQueries.listCompanies,
      })) as GraphQLResult<ListCompaniesQuery>;
      this.companies = response.data.listCompanies.items;
    } catch (e) {
      console.log('error fetching companies', e);
    }
  }
}
