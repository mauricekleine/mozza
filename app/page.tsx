import { Stack } from "~/design-system";

import {
  ClientsSection,
  HeroSection,
  IntroSection,
  ProjectsSection,
  ServicesSection,
} from "~/marketing";

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
