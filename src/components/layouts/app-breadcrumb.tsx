"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SEGMENT_LABELS: Record<string, string> = {
  app: "Dashboard",
  dashboard: "Dashboard",
  profile: "Profile",
  settings: "Settings",
  general: "General",
  password: "Password",
  notifications: "Notifications",
  billing: "Billing",
  "job-preferences": "Job preferences",
  developers: "Developers",
  unlocked: "Unlocked",
};

function humanizeSegment(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function getLabel(segment: string, segments: string[], index: number): string {
  if (segment === "profile" && segments[index - 1] === "settings") {
    return "Account";
  }
  return SEGMENT_LABELS[segment] ?? humanizeSegment(segment);
}

export function AppBreadcrumb() {
  const pathname = usePathname() ?? "";
  const rawSegments = pathname.split("/").filter(Boolean);
  const segments =
    rawSegments[0] === "app" ? rawSegments.slice(1) : rawSegments;

  if (segments.length === 0) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const href = "/app/" + segments.slice(0, index + 1).join("/");
          const label = getLabel(segment, segments, index);
          const isLast = index === segments.length - 1;

          return (
            <Fragment key={href}>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{label}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
