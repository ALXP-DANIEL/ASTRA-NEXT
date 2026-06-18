import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ViewTransition } from "react";
import "@/styles/globals.css";
import { Nav } from "@/components/layouts/nav";
import SplashGate from "@/components/layouts/splash-gate";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/config/site";
import { env } from "@/env";
import { cn } from "@/lib/utils";
import Maintenance from "./maintenance";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.links.github }],
  creator: siteConfig.author,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  other: {
    "github:repo": siteConfig.links.github,
  },
};

const isMaintenance = env.IS_MAINTENANCE === "true";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full antialiased font-mono", jetbrainsMono.variable)}
    >
      <body className="min-h-full font-mono">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {isMaintenance ? (
            <Maintenance />
          ) : (
            <SplashGate>
              <Nav />
              <ViewTransition default="page-fade">{children}</ViewTransition>
            </SplashGate>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
