import { InjectionToken } from '@angular/core';

import { CognitoUserPoolConfig } from '@aws-amplify/core';


/**
 * @const COGNITO_CONFIG
 * Injection token for an app that uses AWS Cognito. Includes configuration to be provided by each consuming application.
 */
export const COGNITO_CONFIG: InjectionToken<CognitoUserPoolConfig> = new InjectionToken(
  'cognito.config - Configuration properties for AWS Cognito.'
);
