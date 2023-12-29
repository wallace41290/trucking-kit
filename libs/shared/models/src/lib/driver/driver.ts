import { CompanyUser } from '../company-user';
import { UserRole } from '../user-role';

export interface Driver extends CompanyUser {
  cdlNumber: string;
  dateOfBirth: Date;
  role: UserRole[];
  state: string;
}
