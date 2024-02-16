import { Injectable } from '@angular/core';
import { Observable, defer } from 'rxjs';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import * as Queries from '@shared/backend/graphql/queries';
import * as Mutations from '@shared/backend/graphql/mutations';
import {
  Company,
  CreateCompanyQuery,
  DeleteCompanyQuery,
  ListCompaniesQuery,
  UpdateCompanyQuery,
} from '@shared/models';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private readonly client = generateClient();

  createCompany(
    company: Company
  ): Observable<GraphQLResult<CreateCompanyQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Mutations.createCompany,
        variables: {
          input: company,
        },
      })
    );
  }

  deleteCompany(
    companyDot: string
  ): Observable<GraphQLResult<DeleteCompanyQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Mutations.deleteCompany,
        variables: {
          input: {
            dotNumber: companyDot,
          },
        },
      })
    );
  }

  fetchCompanies(): Observable<GraphQLResult<ListCompaniesQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Queries.listCompanies,
      })
    );
  }

  updateCompany(
    company: Company
  ): Observable<GraphQLResult<UpdateCompanyQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Mutations.updateCompany,
        variables: {
          input: company,
        },
      })
    );
  }
}
