import { AccountSection } from "@/components/account/account-section";

function WorkExperienceSection() {
  return (
    <AccountSection
      id="work-experience"
      title="Work experience"
      description="Your professional work history."
    >
      <p className="text-muted-foreground text-sm">
        Work experience form will go here.
      </p>
    </AccountSection>
  );
}

export { WorkExperienceSection };
