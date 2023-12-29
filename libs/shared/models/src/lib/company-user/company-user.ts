import { Company } from '../company/company';
import { User } from '../user';

export interface CompanyUser extends User {
  company: Company;
  role: 'COMPANY_ADMIN' | 'DRIVER';
}
