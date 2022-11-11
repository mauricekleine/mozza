import { Stack } from "~/design-system";

import {
  HeroSection,
  IntroSection,
  PastProjectsSection,
  PetProjectsSection,
  ServicesSection,
} from "~/marketing";

export default function HomePage() {
  return (
    <Stack gap={{ base: 32, md: 64 }}>
      <HeroSection />

      <IntroSection />

      <ServicesSection />

      <PastProjectsSection />

      <PetProjectsSection />
    </Stack>
  );
}
