import { createPageMetadata } from "@/lib/metadata";
import HomePage from "./(pages)/(home)/page";

export const metadata = createPageMetadata({
  title: "Home",
  description: "Welcome to ASTRA-NEXT.",
  path: "/",
  type: "Home",
});

export default function Home() {
  return <HomePage />;
}
