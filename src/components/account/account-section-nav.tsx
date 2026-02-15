"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type AccountSectionItem = {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
};

type AccountSectionNavProps = {
  sections: AccountSectionItem[];
  activeSectionId: string | null;
  onSectionClick: (sectionId: string) => void;
  className?: string;
};

function AccountSectionNav({
  sections,
  activeSectionId,
  onSectionClick,
  className,
}: AccountSectionNavProps) {
  return (
    <nav
      aria-label="Account sections"
      className={cn("flex flex-col gap-0.5", className)}
    >
      {sections.map((section) => {
        const isActive = activeSectionId === section.id;
        const Icon = section.icon;
        return (
          <Button
            key={section.id}
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onSectionClick(section.id)}
            className={cn(
              "w-full justify-start gap-3 text-left",
              isActive
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground"
            )}
            aria-current={isActive ? "true" : undefined}
          >
            {Icon ? <Icon className="size-4 shrink-0" aria-hidden /> : null}
            {section.label}
          </Button>
        );
      })}
    </nav>
  );
}

export { AccountSectionNav };
