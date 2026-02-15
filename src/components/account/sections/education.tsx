import { AccountSection } from "@/components/account/account-section";

function EducationSection() {
  return (
    <AccountSection
      id="education"
      title="Education"
      description="Your educational background and qualifications."
    >
      <p className="text-muted-foreground text-sm">
        Education form will go here.
      </p>
    </AccountSection>
  );
}

export { EducationSection };
