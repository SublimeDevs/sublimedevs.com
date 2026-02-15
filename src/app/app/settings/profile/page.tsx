import { AccountPageLayout } from "@/components/account/account-page-layout";
import { BasicInformationSection } from "@/components/account/sections/basic-information";
import { EducationSection } from "@/components/account/sections/education";
import { PortfolioProjectsSection } from "@/components/account/sections/portfolio-projects";
import { SkillsExpertiseSection } from "@/components/account/sections/skills-expertise";
import { WorkExperienceSection } from "@/components/account/sections/work-experience";

export const metadata = {
  title: "Account",
};

export default function SettingsProfilePage() {
  return (
    <AccountPageLayout>
      <BasicInformationSection />
      <EducationSection />
      <WorkExperienceSection />
      <PortfolioProjectsSection />
      <SkillsExpertiseSection />
    </AccountPageLayout>
  );
}
