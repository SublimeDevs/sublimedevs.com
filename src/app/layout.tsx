import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = localFont({
  src: [
    {
      path: "../../public/fonts/MabryPro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/MabryPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/MabryPro-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/MabryPro-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MabryPro-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sublime Devs",
  description: "Sublime Devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(fontSans.className, "bg-background antialiased")}>
        {children}
      </body>
    </html>
  );
}
