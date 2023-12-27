import {Environment} from '@trucking-kit/shared/models';

export const environment:Environment = {
  production: false,
  cognito: {
    userPoolId: 'us-east-1_B6YQTFrkQ', // TODO put in CI secrets
    userPoolClientId: '685gs9sjbtao1imad4fcic82m0'
  },
};
