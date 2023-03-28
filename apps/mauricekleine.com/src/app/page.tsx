import {
  HeroSection,
  IntroSection,
  PastProjectsSection,
  PetProjectsSection,
  ServicesSection,
} from "@mk/marketing";
import { Stack } from "@mk/ui";

export default function Page() {
  return (
    <>
      <HeroSection />

      <Stack gap={{ base: 64 }}>
        <PastProjectsSection />

        <ServicesSection />

        <IntroSection />

        <PetProjectsSection />
      </Stack>
    </>
  );
}
