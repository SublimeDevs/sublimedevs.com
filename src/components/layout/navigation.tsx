import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { PiCodeDuotone } from "react-icons/pi";
import { buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { cn } from "@/lib/utils";

const items = [
  { title: "Services", href: "/services" },
  { title: "Technologies", href: "/technologies" },
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Career", href: "/career" },
];

const Navigation = () => {
  return (
    <header className="border-b-2 border-primary bg-background">
      <div className="flex items-center">
        <div className="flex flex-1 items-center justify-between border-black px-4 py-4 lg:border-r-2 lg:px-6">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger className="lg:hidden">
                <LuMenu className="h-6 w-6 text-primary" />
              </SheetTrigger>
              <SheetContent side="left">
                <Link className="flex items-center gap-2 text-primary" href="/">
                  <PiCodeDuotone className="h-10 w-10 text-primary" />
                  <span className="text-2xl font-bold">SublimeDevs</span>
                </Link>
                <nav className="flex flex-col gap-4 py-8">
                  {items.map((item) => (
                    <Link
                      key={item.href}
                      className="font-medium text-primary hover:text-muted-foreground"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col gap-4">
                  <Link
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "rounded-full",
                    )}
                    href="/contact"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    className={cn(buttonVariants(), "rounded-full")}
                    href="/book-a-call"
                  >
                    Book a Call
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            <Link className="flex items-center gap-2 text-primary" href="/">
              <PiCodeDuotone className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold">SublimeDevs</span>
            </Link>
          </div>
          <nav className="hidden items-center gap-8 lg:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                className="font-medium text-primary hover:text-muted-foreground"
                href={item.href}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4 px-4 lg:px-6">
          <Link
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden rounded-full sm:inline-flex",
            )}
            href="/contact"
          >
            Get in Touch
          </Link>
          <Link
            className={cn(
              buttonVariants(),
              "hidden rounded-full lg:inline-flex",
            )}
            href="/book-a-call"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
