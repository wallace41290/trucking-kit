import { File } from '../file/index';

export interface Company {
  city: string;
  companyName: string;
  dotNumber: string;
  emailAddress: string;
  files: File[];
  mcNumber: string;
  phoneNumber: number;
  state: string;
  streetAddress: string;
  zipCode: number;
}
