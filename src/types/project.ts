export interface CreateProjectRequest {
  name: string;
  description?: string;
  role?: string;
  techStack?: string;
  repoUrl?: string;
  liveUrl?: string;
  startMonth?: number;
  startYear?: number;
  endMonth?: number;
  endYear?: number;
}

export type UpdateProjectRequest = Partial<CreateProjectRequest>;

export interface ProjectItem {
  id: string;
  profileId: string;
  name: string;
  description: string | null;
  role: string | null;
  techStack: string | null;
  repoUrl: string | null;
  liveUrl: string | null;
  startMonth: number | null;
  startYear: number | null;
  endMonth: number | null;
  endYear: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectsResponse {
  message: string;
  projects: ProjectItem[];
}

export interface ProjectSingleResponse {
  message: string;
  project: ProjectItem;
}
