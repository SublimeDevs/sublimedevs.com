export interface CreateEducationRequest {
  school: string;
  degree?: string;
  fieldOfStudy?: string;
  startMonth?: number;
  startYear: number;
  endMonth?: number;
  endYear?: number;
  grade?: string;
  description?: string;
}

export type UpdateEducationRequest = Partial<CreateEducationRequest>;

export interface EducationItem {
  id: string;
  profileId: string;
  school: string;
  degree: string | null;
  fieldOfStudy: string | null;
  startMonth: number;
  startYear: number;
  endMonth: number | null;
  endYear: number | null;
  grade: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface EducationsResponse {
  message: string;
  educations: EducationItem[];
}

export interface EducationSingleResponse {
  message: string;
  education: EducationItem;
}
