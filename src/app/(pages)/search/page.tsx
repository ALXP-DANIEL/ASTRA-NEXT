import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Search",
  description: "Search for content across ASTRA-NEXT.",
  path: "/search",
  type: "Search",
});

export default function SearchPage() {
  return (
    <main className="grid min-h-dvh place-items-center">
      <h1 className="text-2xl font-bold capitalize text-foreground">search</h1>
    </main>
  );
}
