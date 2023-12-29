import { User } from '../user/user';

export interface Driver extends User {
  cdlNumber: string;
  dateOfBirth: Date;
  role: 'Driver';
  state: string;
}
