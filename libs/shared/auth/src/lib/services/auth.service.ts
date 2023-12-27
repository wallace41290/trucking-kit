import { Inject, Injectable } from '@angular/core';
import { COGNITO_CONFIG } from '@shared/models';
import { Amplify } from 'aws-amplify';
import * as Auth from 'aws-amplify/auth';
import { CognitoUserPoolConfig } from '@aws-amplify/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models';

// TODO: convert to rxjs or async functions?

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticationSubject: BehaviorSubject<boolean>;

  constructor(
    @Inject(COGNITO_CONFIG) private cognitoConfig: CognitoUserPoolConfig
  ) {
    Amplify.configure({
      Auth: {
        Cognito: cognitoConfig,
      },
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  public signUp(user: User): Promise<Auth.SignUpOutput> {
    return Auth.signUp({
      username: user.email,
      password: user.password,
    });
  }

  public confirmSignUp(user: User): Promise<Auth.ConfirmSignUpOutput> {
    return Auth.confirmSignUp({
      username: user.email,
      confirmationCode: user.code,
    });
  }

  public signIn(user: User): Promise<Auth.SignInOutput | void> {
    return Auth.signIn({
      username: user.email,
      password: user.password,
    }).then(() => {
      this.authenticationSubject.next(true);
    });
  }

  public signOut(): Promise<void> {
    return Auth.signOut().then(() => {
      this.authenticationSubject.next(false);
    });
  }

  public isAuthenticated(): Promise<boolean> {
    if (this.authenticationSubject.value) {
      return Promise.resolve(true);
    } else {
      return this.getUser()
        .then((user: Auth.AuthUser) => {
          if (user) {
            return true;
          } else {
            return false;
          }
        })
        .catch(() => {
          return false;
        });
    }
  }

  public getUser(): Promise<Auth.AuthUser> {
    return Auth.getCurrentUser();
  }

  public getUserAttributes(): Promise<Auth.FetchUserAttributesOutput> {
    return Auth.fetchUserAttributes();
  }

  public updateUserAttributes(
    attributes: Auth.UpdateUserAttributesInput
  ): Promise<Auth.UpdateUserAttributesOutput> {
    return Auth.updateUserAttributes(attributes);
  }
}
