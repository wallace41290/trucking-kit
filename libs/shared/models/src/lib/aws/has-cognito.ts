import { CognitoUserPoolConfig } from '@aws-amplify/core';

export interface HasCognito {
  cognito: CognitoUserPoolConfig;
}
