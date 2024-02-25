import { Truck } from '../truck';

export type ListTrucksQuery = {
  listTrucks: ListTrucksQueryResult;
};

export type ListTrucksQueryResult = {
  items: Truck[];
};

export type CreateTruckQuery = {
  createTruck: Truck;
};

export type DeleteTruckQuery = {
  deleteTruck: Truck;
};

export type GetTruckQuery = {
  getTruck: Truck;
};

export type UpdateTruckQuery = {
  updateTruck: Truck;
};
