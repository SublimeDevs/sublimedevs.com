import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/layout/navigation";
import { cn } from "@/lib/utils";

const fontSans = localFont({
  src: [
    {
      path: "./fonts/MabryPro-Light.woff2",
      style: "normal",
      weight: "300",
    },
    {
      path: "./fonts/MabryPro-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/MabryPro-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "./fonts/MabryPro-Bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "./fonts/MabryPro-Black.woff2",
      style: "normal",
      weight: "900",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sublime Devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.className, "bg-background antialiased")}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
