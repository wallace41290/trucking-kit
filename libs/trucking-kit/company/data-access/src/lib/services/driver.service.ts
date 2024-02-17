import { Injectable } from '@angular/core';
import { Observable, defer } from 'rxjs';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import * as Queries from '@shared/backend/graphql/queries';
import * as Mutations from '@shared/backend/graphql/mutations';
import {
  CreateDriverQuery,
  DeleteDriverQuery,
  ListDriversQuery,
  UpdateDriverQuery,
  GetDriverQuery,
  Driver,
} from '@shared/models';

@Injectable({ providedIn: 'root' })
export class DriverService {
  private readonly client = generateClient();

  createDriver(driver: Driver): Observable<GraphQLResult<CreateDriverQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Mutations.createDriver,
        variables: {
          input: driver,
        },
      })
    );
  }

  deleteDriver(driverId: string): Observable<GraphQLResult<DeleteDriverQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Mutations.deleteDriver,
        variables: {
          input: {
            id: driverId,
          },
        },
      })
    );
  }

  fetchDrivers(): Observable<GraphQLResult<ListDriversQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Queries.listDrivers,
      })
    );
  }

  getDriver(driverId: string): Observable<GraphQLResult<GetDriverQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Queries.getDriver,
        variables: {
          id: driverId,
        },
      })
    );
  }

  updateDriver(driver: Driver): Observable<GraphQLResult<UpdateDriverQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Mutations.updateDriver,
        variables: {
          input: driver,
        },
      })
    );
  }
}
