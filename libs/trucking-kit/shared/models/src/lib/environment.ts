import {
  Environment as BaseEnvironment,
  HasCognito,
} from '@shared/models';

export interface Environment extends BaseEnvironment, HasCognito {}
