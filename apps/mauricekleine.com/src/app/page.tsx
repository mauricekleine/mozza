import { Stack } from "@mk/design-system";
import {
  HeroSection,
  IntroSection,
  PastProjectsSection,
  PetProjectsSection,
  ServicesSection,
} from "@mk/marketing";

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
