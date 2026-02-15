"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LuBadgeCheck,
  LuChevronRight,
  LuCircleUserRound,
  LuLayoutDashboard,
  LuLockOpen,
  LuSettings,
  LuUsers,
} from "react-icons/lu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import type { UserRole } from "@/types/enums";

type NavSubItem = { title: string; url: string };

type NavItem = {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  items: NavSubItem[];
};

const SETTINGS_SUB_CANDIDATE: NavSubItem[] = [
  { title: "General", url: "/app/settings/general" },
  { title: "Job preferences", url: "/app/settings/job-preferences" },
  { title: "Password", url: "/app/settings/password" },
  { title: "Notifications", url: "/app/settings/notifications" },
];

const SETTINGS_SUB_RECRUITER: NavSubItem[] = [
  { title: "General", url: "/app/settings/general" },
  { title: "Password", url: "/app/settings/password" },
  { title: "Notifications", url: "/app/settings/notifications" },
  { title: "Billing", url: "/app/settings/billing" },
];

const GROUPS_CANDIDATE: { items: NavItem[] }[] = [
  {
    items: [
      {
        title: "Dashboard",
        url: "/app/dashboard",
        icon: LuLayoutDashboard,
        items: [],
      },
      {
        title: "My Profile",
        url: "/app/profile",
        icon: LuCircleUserRound,
        items: [],
      },
      {
        title: "Account",
        url: "/app/settings/profile",
        icon: LuBadgeCheck,
        items: [],
      },
      {
        title: "Settings",
        url: "/app/settings",
        icon: LuSettings,
        items: SETTINGS_SUB_CANDIDATE,
      },
    ],
  },
];

const GROUPS_RECRUITER: { items: NavItem[] }[] = [
  {
    items: [
      {
        title: "Dashboard",
        url: "/app/dashboard",
        icon: LuLayoutDashboard,
        items: [],
      },
      {
        title: "Developers",
        url: "/app/developers",
        icon: LuUsers,
        items: [],
      },
      {
        title: "Unlocked",
        url: "/app/developers/unlocked",
        icon: LuLockOpen,
        items: [],
      },
      {
        title: "Account",
        url: "/app/settings/profile",
        icon: LuBadgeCheck,
        items: [],
      },
      {
        title: "Settings",
        url: "/app/settings",
        icon: LuSettings,
        items: SETTINGS_SUB_RECRUITER,
      },
    ],
  },
];

function isItemActive(pathname: string, item: NavItem): boolean {
  if (pathname === item.url) return true;
  return item.items.some((sub) => pathname === sub.url);
}

export function NavMain() {
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="animate-pulse">
              <div className="bg-muted size-4 rounded" />
              <span className="bg-muted ml-2 h-4 w-24 rounded" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    );
  }

  const user = session?.user as { role?: UserRole } | undefined;
  const role = user?.role ?? "candidate";
  const groups =
    role === "recruiter" || role === "admin"
      ? GROUPS_RECRUITER
      : GROUPS_CANDIDATE;

  return (
    <>
      {groups.map((group, groupIndex) => (
        <SidebarGroup key={groupIndex}>
          <SidebarMenu>
            {group.items.map((item) => {
              const isActive = isItemActive(pathname ?? "", item);
              const hasSubItems = item.items.length > 0;
              return (
                <Collapsible key={item.title} asChild defaultOpen={isActive}>
                  <SidebarMenuItem>
                    {hasSubItems ? (
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          isActive={isActive}
                          className="group"
                        >
                          <item.icon className="size-4" />
                          <span className="truncate">{item.title}</span>
                          <LuChevronRight className="ml-auto size-4 shrink-0 transition-transform group-data-[state=open]:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                    ) : (
                      <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        isActive={isActive}
                      >
                        <Link href={item.url}>
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                    {hasSubItems ? (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={pathname === subItem.url}
                              >
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}
