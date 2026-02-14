import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const fontSans = localFont({
  src: [
    {
      path: "../../public/fonts/SublimeDevsSans-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/SublimeDevsSansItalic-latin.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-sublimedevs-sans",
  display: "swap",
});

const fontMono = localFont({
  src: [
    {
      path: "../../public/fonts/SublimeDevsMono-latin.woff2",
      weight: "100 800",
      style: "normal",
    },
    {
      path: "../../public/fonts/SublimeDevsMonoItalic-latin.woff2",
      weight: "100 800",
      style: "italic",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sublime Devs",
    default: "Sublime Devs",
  },
  description: "Sublime Devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
