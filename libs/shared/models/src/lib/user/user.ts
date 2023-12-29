import { UserRole } from '../user-role';

export interface User {
  emailAddress: string;
  firstName: string;
  isActive: boolean;
  lastName: string;
  phoneNumber: number;
  role: UserRole[];
}
