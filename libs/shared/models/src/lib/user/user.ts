import { File } from '../file/index';

export interface User {
  emailAddress: string;
  files: File[];
  firstName: string;
  isActive: boolean;
  lastName: string;
  phoneNumber: number;
  role: 'ADMIN' | 'COMPANY_ADMIN' | 'DRIVER';
}
