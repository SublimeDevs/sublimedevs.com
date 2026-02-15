import { AccountSection } from "@/components/account/account-section";

function PortfolioProjectsSection() {
  return (
    <AccountSection
      id="portfolio-projects"
      title="Portfolio projects"
      description="Projects you have built or contributed to."
    >
      <p className="text-muted-foreground text-sm">
        Portfolio projects form will go here.
      </p>
    </AccountSection>
  );
}

export { PortfolioProjectsSection };
