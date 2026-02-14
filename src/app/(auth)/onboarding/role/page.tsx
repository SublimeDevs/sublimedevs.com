import type { Metadata } from "next";

import { SelectRoleForm } from "@/components/auth/select-role-form";

export const metadata: Metadata = {
  title: "Select role",
  description:
    "Choose your role on the platform: candidate or recruiter. You can update this later in settings.",
};

export default function OnboardingRolePage() {
  return <SelectRoleForm />;
}
