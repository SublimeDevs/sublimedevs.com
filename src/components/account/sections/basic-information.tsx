import { AccountSection } from "@/components/account/account-section";

function BasicInformationSection() {
  return (
    <AccountSection
      id="basic-information"
      title="Basic information"
      description="Your name, contact details, and location."
    >
      <p className="text-muted-foreground text-sm">
        Basic information form will go here.
      </p>
    </AccountSection>
  );
}

export { BasicInformationSection };
