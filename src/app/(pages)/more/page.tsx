import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "More",
  description: "Explore more features and information from ASTRA-NEXT.",
  path: "/more",
  type: "More",
});

export default function MorePage() {
  return (
    <main className="grid min-h-dvh place-items-center">
      <h1 className="text-2xl font-bold capitalize text-foreground">more</h1>
    </main>
  );
}
