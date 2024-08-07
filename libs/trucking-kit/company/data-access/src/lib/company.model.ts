import { Company } from '@shared/models';

export type CompanyState = {
  companies: Company[];
  creating: boolean;
  fetching: boolean;
  loading: boolean;
  updating: boolean;
  removing?: string;
  dotNumber?: string;
};

export const companyInitialState: CompanyState = {
  companies: [],
  creating: false,
  fetching: false,
  loading: false,
  updating: false,
};
