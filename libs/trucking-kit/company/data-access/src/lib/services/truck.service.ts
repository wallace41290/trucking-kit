import { Injectable } from '@angular/core';
import { Observable, defer } from 'rxjs';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import * as Queries from '@shared/backend/graphql/queries';
import * as Mutations from '@shared/backend/graphql/mutations';
import {
  Truck,
  CreateTruckQuery,
  DeleteTruckQuery,
  ListTrucksQuery,
  UpdateTruckQuery,
  GetTruckQuery,
} from '@shared/models';

@Injectable({ providedIn: 'root' })
export class TruckService {
  private readonly client = generateClient();

  createTruck(truck: Truck): Observable<GraphQLResult<CreateTruckQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Mutations.createTruck,
        variables: {
          input: truck,
        },
      })
    );
  }

  deleteTruck(truckId: string): Observable<GraphQLResult<DeleteTruckQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Mutations.deleteTruck,
        variables: {
          input: {
            id: truckId,
          },
        },
      })
    );
  }

  fetchTrucks(): Observable<GraphQLResult<ListTrucksQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Queries.listTrucks,
      })
    );
  }

  getTruck(truckId: string): Observable<GraphQLResult<GetTruckQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Queries.getTruck,
        variables: {
          id: truckId,
        },
      })
    );
  }

  updateTruck(truck: Truck): Observable<GraphQLResult<UpdateTruckQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Mutations.updateTruck,
        variables: {
          input: truck,
        },
      })
    );
  }
}
