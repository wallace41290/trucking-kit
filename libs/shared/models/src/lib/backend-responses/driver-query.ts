import { Driver } from '../driver';

export type ListDriversQuery = {
  listDrivers: ListDriversQueryResult;
};

export type ListDriversQueryResult = {
  items: Driver[];
};

export type CreateDriverQuery = {
  createDriver: Driver;
};

export type DeleteDriverQuery = {
  deleteDriver: Driver;
};

export type GetDriverQuery = {
  getDriver: Driver;
};

export type UpdateDriverQuery = {
  updateDriver: Driver;
};
