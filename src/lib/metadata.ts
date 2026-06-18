import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataInput = {
  description?: string;
  path: string;
  title: string;
  type?: string;
};

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url.base).toString();
}

function ogImageUrl({ path, title, type }: PageMetadataInput) {
  const url = new URL("/api/og", siteConfig.url.base);
  url.searchParams.set("title", title);
  url.searchParams.set("type", type ?? "Page");
  url.searchParams.set("link", absoluteUrl(path));

  return url.toString();
}

export function createPageMetadata({
  description = siteConfig.description,
  path,
  title,
  type,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const image = ogImageUrl({ description, path, title, type });

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
