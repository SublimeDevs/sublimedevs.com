export interface UploadResumeResponse {
  message: string;
  uploadId: string;
}

export interface PresignedUrlResponse {
  message: string;
  uploadUrl: string;
  uploadId: string;
  storageKey: string;
}

export type ResumeUploadStatus =
  | "uploaded"
  | "processing"
  | "parsed"
  | "failed"
  | "discarded"
  | "confirmed";

export interface ResumeUploadItem {
  id: string;
  userId: string | null;
  profileId: string | null;
  email: string | null;
  storageKey: string;
  status: ResumeUploadStatus;
  extractedPreview: unknown;
  errorMessage: string | null;
  processedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface GetResumeUploadResponse {
  message: string;
  resume: ResumeUploadItem;
}

// --- Extracted resume types (from resume parsing) ---

export interface ExtractedProfile {
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

export interface ExtractedExperience {
  title: string;
  company: string;
  employmentType?:
    | "full_time"
    | "part_time"
    | "contract"
    | "internship"
    | "freelance"
    | "self_employed";
  startMonth: number;
  startYear: number;
  endMonth?: number;
  endYear?: number;
  isCurrent?: boolean;
  description?: string;
  location?: string;
  locationType?: "on_site" | "remote" | "hybrid";
}

export interface ExtractedEducation {
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

export interface ExtractedSkill {
  name: string;
  yearsOfExperience: number;
  proficiencyLevel?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface ExtractedProject {
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

export interface ExtractedResume {
  profile: ExtractedProfile;
  experiences: ExtractedExperience[];
  educations: ExtractedEducation[];
  skills: ExtractedSkill[];
  projects: ExtractedProject[];
}
