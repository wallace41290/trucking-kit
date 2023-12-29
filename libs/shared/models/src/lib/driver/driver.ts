import { CompanyUser } from '../company-user';

export interface Driver extends CompanyUser {
  cdlNumber: string;
  dateOfBirth: Date;
  role: 'DRIVER';
  state: string;
}
