import { createPageMetadata } from "@/lib/metadata";
import HomePage from "./(pages)/(home)/page";

export const metadata = createPageMetadata({
  title: "Home",
  description: "Welcome to my_app.",
  path: "/",
  type: "Home",
});

export default function Home() {
  return <HomePage />;
}
