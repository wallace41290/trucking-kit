import { Task } from '../task';

export type ListTasksQuery = {
  listTasks: ListTasksQueryResult;
};

export type ListTasksQueryResult = {
  items: Task[];
};

export type CreateTaskQuery = {
  createTask: Task;
};

export type DeleteTaskQuery = {
  deleteTask: Task;
};

export type GetTaskQuery = {
  getTask: Task;
};

export type UpdateTaskQuery = {
  updateTask: Task;
};
