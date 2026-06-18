export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  keywords: string[];
  url: {
    base: string;
    author: string;
  };
  links: {
    github: string;
    instagram: string;
    linkedin: string;
    email: string;
  };
  ogImage: string;
};
