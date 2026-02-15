"use client";

import {
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  LuBriefcase,
  LuFolderKanban,
  LuGraduationCap,
  LuSparkles,
  LuUser,
} from "react-icons/lu";

import type { AccountSectionItem } from "@/components/account/account-section-nav";
import { AccountSectionNav } from "@/components/account/account-section-nav";
import { cn } from "@/lib/utils";

const ACCOUNT_SECTIONS: AccountSectionItem[] = [
  { id: "basic-information", label: "Basic information", icon: LuUser },
  { id: "education", label: "Education", icon: LuGraduationCap },
  { id: "work-experience", label: "Work experience", icon: LuBriefcase },
  {
    id: "portfolio-projects",
    label: "Portfolio projects",
    icon: LuFolderKanban,
  },
  { id: "skills-expertise", label: "Skills and expertise", icon: LuSparkles },
];

type AccountPageLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

function AccountPageLayout({ children, className }: AccountPageLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(
    ACCOUNT_SECTIONS[0]?.id ?? null
  );
  const isScrollingRef = useRef(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    setActiveSectionId(sectionId);
    isScrollingRef.current = true;
    section.scrollIntoView({ behavior: "smooth" });

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.hash = sectionId;
      window.history.replaceState(null, "", url.toString());
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.boundingClientRect?.top ?? 0) -
              (b.boundingClientRect?.top ?? 0)
          );
        const topEntry = intersecting[0];
        if (topEntry) {
          const id = (topEntry.target as HTMLElement).getAttribute(
            "data-section"
          );
          if (id) {
            startTransition(() => setActiveSectionId(id));
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    const sectionElements = content.querySelectorAll("[data-section]");
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash.slice(1);
    if (hash && ACCOUNT_SECTIONS.some((s) => s.id === hash)) {
      queueMicrotask(() => scrollToSection(hash));
    }
  }, [scrollToSection]);

  return (
    <div className={cn("flex flex-col gap-6 lg:flex-row lg:gap-8", className)}>
      <aside className="shrink-0 lg:w-56">
        <div className="sticky top-16 space-y-4">
          <h2 className="text-lg font-semibold">Account</h2>
          <AccountSectionNav
            sections={ACCOUNT_SECTIONS}
            activeSectionId={activeSectionId}
            onSectionClick={scrollToSection}
          />
        </div>
      </aside>

      <div ref={contentRef} className="min-w-0 flex-1 py-4">
        <div className="flex flex-col gap-8">{children}</div>
      </div>
    </div>
  );
}

export { ACCOUNT_SECTIONS, AccountPageLayout };
