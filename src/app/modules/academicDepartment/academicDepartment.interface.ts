import { Model, Types } from 'mongoose';
import { IAcademicFaculty } from '../academicFaculty/academicFaculty.interface';

export interface IAcademicDepartment {
  title: string;
  academicFaculty: Types.ObjectId | IAcademicFaculty;
  syncId: string;
}

export type AcademicDepartmentModel = Model<
  IAcademicDepartment,
  Record<string, unknown>
>;

export interface IAcademicDepartmentFilters {
  searchTerm?: string;
  academicFaculty?: Types.ObjectId;
}

export interface AcademicDepartmentCreatedEvent {
  id: string;
  title: string;
  academicFacultyId: string;
}

export interface AcademicDepartmentUpdatedEvent {
  id: string;
  title: string;
  academicFacultyId: string;
}

export interface AcademicDepartmentDeletedEvent {
  id: string;
}
