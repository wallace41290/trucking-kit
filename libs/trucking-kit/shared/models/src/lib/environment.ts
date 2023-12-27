import { Environment as BaseEnvironment, Cognito } from '@shared/models';

export interface Environment extends BaseEnvironment {
  cognito: Cognito;
}
