import { AuthUser } from 'aws-amplify/auth';

export type AuthState = {
  loggedIn: boolean;
  user: AuthUser | undefined;
};

export const initialUserValue: AuthUser | undefined = undefined;

export const authInitialState: AuthState = {
  loggedIn: false,
  user: initialUserValue,
};
