import { Stack } from "@mozza-ui/react";

import {
  HeroSection,
  IntroSection,
  PastProjectsSection,
  PetProjectsSection,
  ServicesSection,
} from "~/marketing";

export default function Page() {
  return (
    <>
      <HeroSection />

      <Stack gap={{ base: 64 }}>
        {/* <SkillsSection /> */}

        <PastProjectsSection />

        <ServicesSection />

        <IntroSection />

        <PetProjectsSection />
      </Stack>
    </>
  );
}
