import type { EducationItem } from "./education";
import type { ExperienceItem } from "./experience";
import type { ProjectItem } from "./project";
import type { SkillItem } from "./skill";

export interface CreateProfileRequest {
  email: string;
  firstName?: string;
  lastName?: string;
  designation?: string;
  headline?: string;
  location?: string;
  yearsOfExperience?: number;
  availability?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
}

export type UpdateProfileRequest = Partial<CreateProfileRequest>;

export interface ProfileData {
  id: string;
  userId: string | null;
  email: string;
  source: "admin_resume" | "user_resume" | "manual";
  isClaimed: boolean;
  claimedAt: string | null;
  firstName: string | null;
  lastName: string | null;
  designation: string | null;
  headline: string | null;
  location: string | null;
  yearsOfExperience: number | null;
  availability: string | null;
  linkedinUrl: string | null;
  githubUrl: string | null;
  websiteUrl: string | null;
  createdAt: string;
  updatedAt: string;
  experiences?: ExperienceItem[];
  educations?: EducationItem[];
  skills?: SkillItem[];
  projects?: ProjectItem[];
}

export interface ProfileResponse {
  message: string;
  data: ProfileData;
}
