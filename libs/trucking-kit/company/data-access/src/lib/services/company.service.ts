import { Injectable } from '@angular/core';
import { Observable, defer } from 'rxjs';
// import * as Auth from 'aws-amplify/auth';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import * as Queries from '@shared/backend/graphql/queries';
// import * as Mutations from '@shared/backend/graphql/mutations';
import {
  //   Company,
  //   CreateCompanyQuery,
  ListCompaniesQuery,
  //   RequestError,
} from '@shared/models';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  private readonly client = generateClient();

  fetchCompanies(): Observable<GraphQLResult<ListCompaniesQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Queries.listCompanies,
      })
    );
  }
}
