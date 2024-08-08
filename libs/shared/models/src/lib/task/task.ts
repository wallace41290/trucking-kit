import { Company } from '../company';

export type TaskStatus = 'New' | 'Assigned' | 'Done';

export type Task = {
  company?: Company;
  createdDate?: Date;
  description?: string;
  dueDate?: Date;
  id?: string;
  lastUpdatedDate?: Date;
  status?: string;
  title?: string;
};
