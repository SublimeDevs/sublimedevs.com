import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { SiSahibinden } from "react-icons/si";
import AuthMenu from "./auth-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const items = [{ title: "Pricing", href: "/pricing" }];

export default function Header() {
  return (
    <div className="container mx-auto px-4 py-2.5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 lg:justify-between lg:gap-8">
          <Sheet>
            <SheetTrigger className="lg:hidden" asChild>
              <LuMenu className="size-6" />
            </SheetTrigger>
            <SheetContent className="p-4" side="left">
              <Link className="flex items-center gap-0.5 font-medium" href="/">
                <div className="text-primary flex h-8 w-8 items-center justify-center rounded-md">
                  <SiSahibinden className="size-6 rounded-xs" />
                </div>
                <span className="text-lg font-bold">Sublime Devs</span>
              </Link>
              <div className="mt-4 flex flex-col gap-4">
                {items.map((item) => (
                  <Link key={item.title} className="block" href={item.href}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Link className="flex items-center gap-0.5 font-medium" href="/">
            <div className="text-primary flex h-8 w-8 items-center justify-center rounded-md">
              <SiSahibinden className="size-6 rounded-xs" />
            </div>
            <span className="text-lg font-bold">Sublime Devs</span>
          </Link>
          <div className="hidden items-center gap-6 lg:flex">
            {items.map((item) => (
              <Link key={item.title} href={item.href}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <AuthMenu />
      </div>
    </div>
  );
}
