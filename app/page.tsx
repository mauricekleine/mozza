import {
  ClientsSection,
  PageHeader,
  ProjectsSection,
  ResourcesSection,
  ServicesSection,
} from "~/home";
import { Stack } from "~/ui/layout";
import { Section } from "~/ui/layout/section";

export default function HomePage() {
  return (
    <Stack gap={32}>
      <Section>
        <div className="my-32">
          <PageHeader />
        </div>
      </Section>

      <ResourcesSection />

      {/* <ServicesSection /> */}

      <ClientsSection />

      <ProjectsSection />
    </Stack>
  );
}
