import StatusPage from "@/components/layouts/status-page";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The requested page could not be found.",
  path: "/404",
  type: "Error 404",
});

export default function NotFound() {
  return (
    <StatusPage
      className="min-h-dvh"
      code="404"
      eyebrow="Page not found"
      title="This page drifted out of range."
      description="The link may be old, the address may be mistyped, or the page you were looking for no longer lives here."
      actions={[
        {
          href: "/",
          label: "Back home",
        },
      ]}
    />
  );
}
