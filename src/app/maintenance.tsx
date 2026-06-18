import StatusPage from "@/components/layouts/status-page";

export default function Maintenance() {
  return (
    <StatusPage
      code="503"
      eyebrow="Maintenance"
      title="We'll be back soon."
      description="The site is temporarily offline while we ship updates."
    />
  );
}
