import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, defer, map, of } from 'rxjs';
import { CognitoUserPoolConfig } from '@aws-amplify/core';

import {
  COGNITO_CONFIG,
  Credentials,
  NewUserConfirmation,
} from '@shared/models';
import { Amplify } from 'aws-amplify';
import * as Auth from 'aws-amplify/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(@Inject(COGNITO_CONFIG) cognitoConfig: CognitoUserPoolConfig) {
    Amplify.configure({
      Auth: {
        Cognito: cognitoConfig,
      },
    });
  }

  user(): Observable<Auth.AuthUser> {
    return defer(() => Auth.getCurrentUser());
  }

  login(credentials: Credentials): Observable<Auth.SignInOutput> {
    return defer(() =>
      Auth.signIn({
        username: credentials.email,
        password: credentials.password,
      })
    );
  }

  register(newUser: Credentials): Observable<Auth.SignUpOutput> {
    return defer(() =>
      Auth.signUp({
        username: newUser.email,
        password: newUser.password,
      })
    );
  }

  confirmRegistration(
    newUserConfirmation: NewUserConfirmation
  ): Observable<Auth.ConfirmSignUpOutput> {
    return defer(() =>
      Auth.confirmSignUp({
        username: newUserConfirmation.email,
        confirmationCode: newUserConfirmation.code,
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    // TODO: in the future, we should probably base
    // this off the expiration for a JWT token
    return this.user().pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
