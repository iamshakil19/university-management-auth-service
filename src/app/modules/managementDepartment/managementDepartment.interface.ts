import { Model } from 'mongoose';

export interface IManagementDepartment {
  title: string;
}

export type ManagementDepartmentModel = Model<
  IManagementDepartment,
  Record<string, unknown>
>;

export interface IManagementDepartmentFilters {
  searchTerm?: string;
}
