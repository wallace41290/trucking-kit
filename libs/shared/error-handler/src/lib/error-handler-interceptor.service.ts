import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { errorHandlerActions } from './+state/error-handler.actions';

export const errorHandlingInterceptor = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const store = inject(Store);

  return next(request).pipe(
    catchError((error) => {
      console.log('error interceptor', error);
      if (error instanceof HttpErrorResponse) {
        switch (error.status) {
          case 401:
            store.dispatch(errorHandlerActions.throw401Error({ error }));
            break;
          case 404:
            store.dispatch(errorHandlerActions.throw404Error({ error }));
            break;
          default:
            throwError(()=>error);
            break;
        }
      }
      return throwError(()=>error);
    }),
  );
};
