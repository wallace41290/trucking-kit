import { File } from '../file/index';

export interface Driver {
  cdlNumber: string;
  dateOfBirth: Date;
  emailAddress: string;
  files: File[];
  isActive: boolean;
  name: string;
  phoneNumber: number;
  state: string;
}
