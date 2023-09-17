import { Model } from 'mongoose';

export interface IAcademicFaculty {
  title: string;
  syncId: string;
}

export type AcademicFacultyModel = Model<
  IAcademicFaculty,
  Record<string, unknown>
>;

export interface IAcademicFacultyFilters {
  searchTerm?: string;
}

export interface IAcademicFacultyCreatedEvent {
  title: string;
  id: string;
}
