import { Company } from '../company';

export type ListCompaniesQuery = {
  listCompanies: ListCompaniesQueryResult;
};

export type ListCompaniesQueryResult = {
  items: Company[];
};

export type CreateCompanyQuery = {
  createCompany: Company;
};
