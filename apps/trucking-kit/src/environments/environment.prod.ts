import {Environment} from '@trucking-kit/shared/models';

export const environment:Environment = {
  production: true,
  cognito: {
    userPoolId: 'INSERT_SECRET_VAR',
    userPoolWebClientId: 'INSERT_SECRET_VAR',
  },
};
