import type { ProficiencyLevel } from "./enums";

export interface CreateSkillRequest {
  name: string;
  yearsOfExperience: number;
  proficiencyLevel?: ProficiencyLevel;
}

export type UpdateSkillRequest = Partial<CreateSkillRequest>;

export interface SkillItem {
  id: string;
  profileId: string;
  name: string;
  yearsOfExperience: number;
  proficiencyLevel: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface SkillsResponse {
  message: string;
  skills: SkillItem[];
}

export interface SkillSingleResponse {
  message: string;
  skill: SkillItem;
}
