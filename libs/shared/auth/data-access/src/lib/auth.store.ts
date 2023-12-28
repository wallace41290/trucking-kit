import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { AuthState, authInitialState, initialUserValue } from './auth.model';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { exhaustMap, pipe, switchMap, tap, withLatestFrom } from 'rxjs';
import { concatLatestFrom, tapResponse } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { formsActions, ngrxFormsQuery } from '@shared/forms';
import { Credentials } from '@shared/models';

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState<AuthState>(authInitialState),
  withMethods(
    (
      store,
      reduxStore = inject(Store),
      authService = inject(AuthService),
      router = inject(Router)
    ) => ({
      getUser: rxMethod<void>(
        pipe(
          switchMap(() => authService.user()),
          tap((user) => patchState(store, { user, loggedIn: true }))
        )
      ),
      login: rxMethod<void>(
        pipe(
          concatLatestFrom(() => reduxStore.select(ngrxFormsQuery.selectData)),

          exhaustMap(([, data]) =>
            // TODO: Add a typeguard upstream to properly ensure this data is the correct type
            authService.login(data as unknown as Credentials).pipe(
              withLatestFrom(authService.user()),
              tapResponse({
                next: ([, user]) => {
                  patchState(store, { user, loggedIn: true });
                  router.navigateByUrl('/');
                },
                error: ({ error }) =>
                  reduxStore.dispatch(
                    formsActions.setErrors({ errors: error.errors })
                  ),
              })
            )
          )
        )
      ),
      register: rxMethod<void>(
        pipe(
          concatLatestFrom(() => reduxStore.select(ngrxFormsQuery.selectData)),
          exhaustMap(([, data]) =>
            // TODO: Add a typeguard upstream to properly ensure this data is the correct type
            authService.register(data as unknown as Credentials).pipe(
              tapResponse({
                next: () => {
                  router.navigateByUrl('login');
                },
                error: ({ error }) =>
                  reduxStore.dispatch(
                    formsActions.setErrors({ errors: error.errors })
                  ),
              })
            )
          )
        )
      ),
      logout: () => {
        patchState(store, { user: initialUserValue, loggedIn: false });
        router.navigateByUrl('login');
      },
    })
  )
);
