import { Company } from '../company';

export type TaskStatus = 'Assigned' | 'Done';

export type Task = {
  company: Company;
  createdDate: Date;
  description: string;
  dueDate: Date;
  lastUpdatedDate: Date;
  status: TaskStatus;
  title: string;
};
