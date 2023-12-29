import { Company } from '../company';
import { File } from '../file/index';

export interface User {
  company: Company;
  emailAddress: string;
  files: File[];
  firstName: string;
  isActive: boolean;
  lastName: string;
  phoneNumber: number;
  role: 'ADMIN' | 'COMPANY_ADMIN' | 'DRIVER';
}
