import { Company } from '@shared/models';

export type CompanyState = {
  company?: Company;
  loading: boolean;
  updating: boolean;
  removing: boolean;
};

export const companyInitialState: CompanyState = {
  loading: false,
  updating: false,
  removing: false,
};
