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

export type DeleteCompanyQuery = {
  deleteCompany: Company;
};

export type GetCompanyQuery = {
  getCompany: Company;
};

export type UpdateCompanyQuery = {
  updateCompany: Company;
};
