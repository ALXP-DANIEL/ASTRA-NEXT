import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Browse",
  description: "Browse content available in my_app.",
  path: "/browse",
  type: "Browse",
});

export default function BrowsePage() {
  return (
    <main className="grid min-h-dvh place-items-center">
      <h1 className="text-2xl font-bold capitalize text-foreground">browse</h1>
    </main>
  );
}
