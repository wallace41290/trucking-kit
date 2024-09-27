import { Service } from '../service';

export type Company = {
  activeServices: Service[];
  city: string;
  companyName: string;
  dotNumber: string;
  state: string;
  streetAddress: string;
  zipCode: number;
};
