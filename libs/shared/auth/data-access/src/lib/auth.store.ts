import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { AuthState, authInitialState, initialUserValue } from './auth.model';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { exhaustMap, pipe, switchMap, tap } from 'rxjs';
import { concatLatestFrom, tapResponse } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { formsActions, ngrxFormsQuery } from '@shared/forms';
import { Credentials } from '@shared/models';
import { AuthError } from 'aws-amplify/auth';

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
          tap(() => {
            console.groupCollapsed('AuthStore[getUser]');
            console.log('prev state', store);
          }),
          switchMap(() =>
            authService.user().pipe(
              tapResponse({
                next: (user) => patchState(store, { user, loggedIn: true }),
                error: (error) => console.error(error),
                finalize: () => {
                  console.log('next state', store);
                  console.groupEnd();
                },
              })
            )
          )
        )
      ),
      login: rxMethod<void>(
        pipe(
          tap(() => {
            console.groupCollapsed('AuthStore[login]');
            console.log('prev state', store);
            patchState(store, { loggingIn: true });
          }),
          concatLatestFrom(() => reduxStore.select(ngrxFormsQuery.selectData)),
          exhaustMap(([, data]) =>
            // TODO: Add a typeguard upstream to properly ensure this data is the correct type
            authService.login(data as unknown as Credentials).pipe(
              tapResponse({
                next: (user) => {
                  patchState(store, { user, loggedIn: true });
                  router.navigateByUrl('/');
                },
                error: (error: AuthError) => {
                  console.error(error);
                  reduxStore.dispatch(
                    formsActions.setErrors({
                      errors: { [error.name]: error.message },
                    })
                  );
                },
                finalize: () => {
                  patchState(store, { loggingIn: false });
                  console.log('next state', store);
                  console.groupEnd();
                },
              })
            )
          )
        )
      ),
      register: rxMethod<void>(
        pipe(
          tap(() => {
            console.groupCollapsed('AuthStore[register]');
            console.log('prev state', store);
          }),
          concatLatestFrom(() => reduxStore.select(ngrxFormsQuery.selectData)),
          tap(([, data]) =>
            patchState(store, {
              newUserEmail: (data as unknown as Credentials).email,
              registering: true,
            })
          ),
          exhaustMap(([, data]) =>
            // TODO: Add a typeguard upstream to properly ensure this data is the correct type
            authService.register(data as unknown as Credentials).pipe(
              tapResponse({
                next: () => router.navigateByUrl('confirm-registration'),
                error: (error: AuthError) => {
                  console.error(error);
                  reduxStore.dispatch(
                    formsActions.setErrors({
                      errors: { [error.name]: error.message },
                    })
                  );
                },
                finalize: () => {
                  patchState(store, { registering: false });
                  console.log('next state', store);
                  console.groupEnd();
                },
              })
            )
          )
        )
      ),
      confirmRegistration: rxMethod<void>(
        pipe(
          tap(() => {
            console.groupCollapsed('AuthStore[confirmRegistration]');
            console.log('prev state', store);
            patchState(store, { confirmingRegistration: true });
          }),
          concatLatestFrom(() => reduxStore.select(ngrxFormsQuery.selectData)),
          exhaustMap(([, data]) =>
            authService
              .confirmRegistration({
                email: store.newUserEmail() as string,
                code: data['code'] as string,
              })
              .pipe(
                tapResponse({
                  next: () => {
                    router.navigateByUrl('login');
                    patchState(store, { newUserEmail: undefined });
                  },
                  error: (error: AuthError) => {
                    console.error(error);
                    reduxStore.dispatch(
                      formsActions.setErrors({
                        errors: { [error.name]: error.message },
                      })
                    );
                  },
                  finalize: () => {
                    patchState(store, { confirmingRegistration: false });
                    console.log('next state', store);
                    console.groupEnd();
                  },
                })
              )
          )
        )
      ),
      resendCode: rxMethod<void>(
        pipe(
          tap(() => {
            patchState(store, { resendingCode: true });
            console.groupCollapsed('AuthStore[resendCode]');
            console.log('prev state', store);
          }),
          exhaustMap(() =>
            authService
              .resendRegistrationCode({
                email: store.newUserEmail() as string,
              })
              .pipe(
                tapResponse({
                  next: () => {
                    patchState(store, { resendingCode: false });
                  },
                  error: (error: AuthError) => {
                    patchState(store, { resendingCode: false });
                    console.error(error);
                    reduxStore.dispatch(
                      formsActions.setErrors({
                        errors: { [error.name]: error.message },
                      })
                    );
                  },
                  finalize: () => {
                    console.log('next state', store);
                    console.groupEnd();
                  },
                })
              )
          )
        )
      ),
      logout: rxMethod<void>(
        pipe(
          tap(() => {
            console.groupCollapsed('AuthStore[logout]');
            console.log('prev state', store);
          }),
          switchMap(() =>
            authService.logout().pipe(
              tapResponse({
                next: () =>
                  patchState(store, {
                    user: initialUserValue,
                    loggedIn: false,
                  }),
                error: (error) => console.error(error),
                finalize: () => {
                  router.navigateByUrl('login');
                  console.log('next state', store);
                  console.groupEnd();
                },
              })
            )
          )
        )
      ),
    })
  )
);
