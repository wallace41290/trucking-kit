import { FetchUserAttributesOutput } from 'aws-amplify/auth';

export type ProfileState = {
  userAttributes: Pick<FetchUserAttributesOutput, 'name' | 'address'>;
};

export const initialUserValue: Pick<
  FetchUserAttributesOutput,
  'name' | 'address'
> = { name: '', address: '' };

export const profileInitialState: ProfileState = {
  userAttributes: initialUserValue,
};
