import {
  ClientsSection,
  HeroSection,
  IntroSection,
  ProjectsSection,
  ServicesSection,
} from "~/marketing";
import { Stack } from "~/ui/layout";
import { Section } from "~/ui/layout/section";

export default function HomePage() {
  return (
    <Stack gap={32}>
      <HeroSection />

      <IntroSection />

      {/* <ServicesSection /> */}

      <ClientsSection />

      <ProjectsSection />
    </Stack>
  );
}
