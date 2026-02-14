import type { EmploymentType, LocationType, ProficiencyLevel } from "./enums";

export interface ListDevelopersQuery {
  page?: number;
  limit?: number;
  q?: string;
  location?: string;
  designation?: string;
  availability?: string;
  minYearsExperience?: number;
  maxYearsExperience?: number;
  skills?: string[];
  employmentType?: EmploymentType;
  workLocationType?: LocationType;
  proficiencyLevel?: ProficiencyLevel;
}

export interface DeveloperListItem {
  id: string;
  firstName: string | null;
  lastName: string | null;
  designation: string | null;
  headline: string | null;
  location: string | null;
  yearsOfExperience: number | null;
  availability: string | null;
  skills: string[];
  unlocked?: boolean;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface DevelopersListData {
  data: DeveloperListItem[];
  meta: PaginationMeta;
}

export interface DevelopersListResponse {
  message: string;
  data: DevelopersListData;
}

export interface FilterOption {
  value: string;
  count: number;
}

export interface YearsOfExperienceRange {
  min: number;
  max: number;
}

export interface FiltersListingData {
  locations: FilterOption[];
  designations: FilterOption[];
  availability: FilterOption[];
  skills: FilterOption[];
  employmentTypes: FilterOption[];
  workLocationTypes: FilterOption[];
  proficiencyLevels: FilterOption[];
  yearsOfExperienceRange?: YearsOfExperienceRange;
}

export interface FiltersListingResponse {
  message: string;
  data: FiltersListingData;
}

export interface UnlockedProfileItem {
  id: string;
  firstName: string | null;
  lastName: string | null;
  designation: string | null;
  unlockedAt: string;
}

export interface UnlockedListResponse {
  message: string;
  data: UnlockedProfileItem[];
}
