import { AuthUser } from 'aws-amplify/auth';

export type AuthState = {
  confirmingRegistration: boolean;
  loggedIn: boolean;
  loggingIn: boolean;
  newUserEmail: string | undefined;
  registering: boolean;
  resendingCode: boolean;
  user: AuthUser | undefined;
};

export const initialUserValue: AuthUser | undefined = undefined;

export const authInitialState: AuthState = {
  confirmingRegistration: false,
  loggedIn: false,
  loggingIn: false,
  newUserEmail: undefined,
  registering: false,
  resendingCode: false,
  user: initialUserValue,
};
