import { ClientsSection } from "~/home/clients-section";
import { PageHeader } from "~/home/page-header";
import { ProjectsSection } from "~/home/projects-section";
import { ResourcesSection } from "~/home/resources-section";
import { ServicesSection } from "~/home/services-section";
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

      {/* <ServicesSection />

      <ClientsSection /> */}

      <ResourcesSection />

      <ProjectsSection />
    </Stack>
  );
}
