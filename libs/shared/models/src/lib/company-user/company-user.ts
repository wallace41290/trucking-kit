import { Company } from '../company/company';
import { User } from '../user';
import { UserRole } from '../user-role';

export interface CompanyUser extends User {
  company: Company;
  files: File[];
  role: UserRole[];
}
