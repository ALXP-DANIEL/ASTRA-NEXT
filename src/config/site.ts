import { env } from "@/env";
import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "my_app",
  author: "ALXP-DANIEL",
  description: "A modern web application built with Next.js.",
  keywords: ["my_app", "web application"],
  url: {
    base: env.NEXT_PUBLIC_SITE_URL,
    author: "https://alifdaniel.dpdns.org",
  },
  links: {
    github: "https://github.com/ALXP-DANIEL",
    instagram: "https://www.instagram.com/thealifhaker1/",
    linkedin: "https://www.linkedin.com/in/thealifhaker1",
    email: "alifdaniel.workspace@gmail.com",
  },
  ogImage: `${env.NEXT_PUBLIC_SITE_URL}/api/og`,
};
