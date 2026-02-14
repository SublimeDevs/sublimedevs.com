import type { Metadata } from "next";
import Link from "next/link";
import { SiSublimetext } from "react-icons/si";

export const metadata: Metadata = {
  title: {
    template: "%s | Sublime Devs",
    default: "Sublime Devs",
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="text-foreground flex items-center gap-2 self-center font-medium"
        >
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <SiSublimetext className="size-4" />
          </div>
          Sublime Devs
        </Link>
        {children}
      </div>
    </div>
  );
}
