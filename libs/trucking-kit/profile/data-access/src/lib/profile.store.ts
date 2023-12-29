import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { ProfileState, profileInitialState } from './profile.model';
import { inject } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { pipe, switchMap, tap } from 'rxjs';
import { concatLatestFrom, tapResponse } from '@ngrx/operators';
import { Store } from '@ngrx/store';
import { formsActions, ngrxFormsQuery } from '@shared/forms';
import { setLoaded, setLoading, withCallState } from '@shared/data-access';
import { UpdateUserAttributesInput } from 'aws-amplify/auth';

export const ProfileStore = signalStore(
  { providedIn: 'root' },
  withState<ProfileState>(profileInitialState),
  withMethods(
    (
      store,
      profileService = inject(ProfileService),
      reduxStore = inject(Store)
    ) => ({
      getProfile: rxMethod<void>(
        pipe(
          tap(() => setLoading('getProfile')),
          switchMap(() =>
            profileService.getUserAttributes().pipe(
              tapResponse({
                next: (userAttributes) => {
                  patchState(store, {
                    userAttributes,
                    ...setLoaded('getProfile'),
                  });
                },
                error: () => {
                  patchState(store, {
                    userAttributes: profileInitialState.userAttributes,
                    ...setLoaded('getProfile'),
                  });
                },
              })
            )
          )
        )
      ),
      updateProfile: rxMethod<void>(
        pipe(
          concatLatestFrom(() => reduxStore.select(ngrxFormsQuery.selectData)),
          switchMap(([, data]) =>
            profileService
              .updateUserAttributes(
                // TODO: Add a typeguard upstream to properly ensure this data is the correct type
                data as unknown as UpdateUserAttributesInput
              )
              .pipe(
                tapResponse({
                  next: () =>
                    patchState(store, {
                      // TODO: how to update values from response?
                      userAttributes: { ...store.userAttributes() },
                    }),
                  error: ({ error }) =>
                    reduxStore.dispatch(
                      formsActions.setErrors({ errors: error.errors })
                    ),
                })
              )
          )
        )
      ),
      initializeProfile: () => {
        patchState(store, profileInitialState);
      },
    })
  ),
  withCallState({ collection: 'getProfile' })
);
