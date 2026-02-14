import type { Role, UserRole } from "./enums";

export interface UpdateRoleRequest {
  role: Role;
}

export interface UserItem {
  id: string;
  name: string;
  username: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  onboardingCompleted: boolean | null;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateRoleResponse {
  message: string;
  user: UserItem;
}
