import {
  ClientsSection,
  IntroSection,
  PageHeader,
  ProjectsSection,
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

      <IntroSection />

      {/* <ServicesSection /> */}

      <ClientsSection />

      <ProjectsSection />
    </Stack>
  );
}
