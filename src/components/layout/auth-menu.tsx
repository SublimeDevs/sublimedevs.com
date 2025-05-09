"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { LuCog, LuLogOut, LuUser } from "react-icons/lu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function AuthMenu() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (!session?.user)
    return (
      <div className="flex items-center gap-2">
        <Link
          className={cn(
            buttonVariants({ variant: "link" }),
            "hidden font-semibold hover:no-underline lg:block",
          )}
          href="/login"
        >
          Log in
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "default" }),
            "font-semibold",
          )}
          href="/signup"
        >
          Sign up
        </Link>
      </div>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-8">
          <AvatarImage alt={session.user.name} src={session.user.image} />
          <AvatarFallback>{session.user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="bottom">
        <DropdownMenuItem className="flex cursor-pointer items-center gap-3 px-2 py-2">
          <Avatar className="size-8">
            <AvatarImage alt={session.user.name} src={session.user.image} />
            <AvatarFallback>{session.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{session.user.name}</span>
            <span className="text-muted-foreground text-xs">
              {session.user.email}
            </span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link className="cursor-pointer font-medium" href="/settings/profile">
            <LuUser className="size-5" />
            Profile Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link className="cursor-pointer font-medium" href="/settings/account">
            <LuCog className="size-5" />
            Account Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer font-medium"
          onClick={() => signOut()}
        >
          <LuLogOut className="size-5" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
