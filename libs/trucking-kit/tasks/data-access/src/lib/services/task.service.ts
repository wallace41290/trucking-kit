import { Injectable } from '@angular/core';
import { Observable, defer } from 'rxjs';
import { generateClient, GraphQLResult } from 'aws-amplify/api';
import * as Queries from '@shared/backend/graphql/queries';
import * as Mutations from '@shared/backend/graphql/mutations';
import {
  Task,
  CreateTaskQuery,
  DeleteTaskQuery,
  GetTaskQuery,
  ListTasksQuery,
  UpdateTaskQuery,
} from '@shared/models';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private readonly client = generateClient();

  createTask(task: Task): Observable<GraphQLResult<CreateTaskQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Mutations.createTask,
        variables: {
          input: task,
        },
      })
    );
  }

  getTask(dotNumber: string): Observable<GraphQLResult<GetTaskQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Queries.getTask,
        variables: {
          dotNumber: dotNumber,
        },
      })
    );
  }

  deleteTask(taskDot: string): Observable<GraphQLResult<DeleteTaskQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Mutations.deleteTask,
        variables: {
          input: {
            dotNumber: taskDot,
          },
        },
      })
    );
  }

  fetchTasks(): Observable<GraphQLResult<ListTasksQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Queries.listTasks,
      })
    );
  }

  updateTask(task: Task): Observable<GraphQLResult<UpdateTaskQuery>> {
    return defer(() =>
      this.client.graphql({
        query: Mutations.updateTask,
        variables: {
          input: task,
        },
      })
    );
  }
}
