import type { EmploymentType, LocationType } from "./enums";

export interface CreateExperienceRequest {
  title: string;
  company: string;
  employmentType?: EmploymentType;
  startMonth: number;
  startYear: number;
  endMonth?: number;
  endYear?: number;
  isCurrent?: boolean;
  description?: string;
  location?: string;
  locationType?: LocationType;
}

export type UpdateExperienceRequest = Partial<CreateExperienceRequest>;

export interface ExperienceItem {
  id: string;
  profileId: string;
  title: string;
  company: string;
  employmentType: string | null;
  startMonth: number;
  startYear: number;
  endMonth: number | null;
  endYear: number | null;
  isCurrent: boolean;
  description: string | null;
  location: string | null;
  locationType: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ExperiencesResponse {
  message: string;
  experiences: ExperienceItem[];
}

export interface ExperienceSingleResponse {
  message: string;
  experience: ExperienceItem;
}
