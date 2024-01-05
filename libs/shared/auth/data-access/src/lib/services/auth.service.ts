import { Location } from '@angular/common';
import { Injectable, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  catchError,
  defer,
  distinctUntilChanged,
  from,
  map,
  of,
} from 'rxjs';
import { Hub } from 'aws-amplify/utils';
import * as Auth from 'aws-amplify/auth';

@Injectable({ providedIn: 'root' })
export class AuthService implements OnDestroy {
  private _router = inject(Router);
  private _location = inject(Location);
  private _isAuthenticatedState$ = new BehaviorSubject<boolean>(false);
  /** A hot observable that will keep in sync whether a user is authenticated. */
  isAuthenticatedState$ = this._isAuthenticatedState$.pipe(
    distinctUntilChanged()
  );

  // Listen for auth events to keep state in sync
  private _hubListenerCancelToken = Hub.listen('auth', ({ payload }) => {
    switch (payload.event) {
      case 'signedIn':
        console.log('[AuthService] user have been signedIn successfully.');
        this._isAuthenticatedState$.next(true);
        // Trigger navigation event
        this._router.navigate(['/'], { onSameUrlNavigation: 'reload' });
        break;
      case 'signedOut':
        console.log('[AuthService] user have been signedOut successfully.');
        this._isAuthenticatedState$.next(false);
        // Clear URL to root
        this._location.replaceState('');
        break;
      default:
        console.log('[AuthService] auth state change: ', payload);
        break;
    }
  });

  constructor() {
    // Initialize isAuthenticatedState
    this.isAuthenticated().subscribe((isAuthenticated) =>
      this._isAuthenticatedState$.next(isAuthenticated)
    );
  }

  user(): Observable<Auth.AuthUser> {
    return defer(() => Auth.getCurrentUser());
  }

  /**
   * Calls the amplify API to get the user in order to determine whether
   * anyone is currently authenticated.
   * @note A cold observable
   * @returns whether a user is authenticated
   */
  isAuthenticated(): Observable<boolean> {
    return this.user().pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  logout(): Observable<void> {
    return from(Auth.signOut());
  }

  ngOnDestroy(): void {
    // Stop listening to auth events.
    this._hubListenerCancelToken();
  }
}
