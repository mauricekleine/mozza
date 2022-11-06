import { ProductboardLogo } from "~/home/client-logos/productboard-logo";
import { TopAnimationLogo } from "~/home/client-logos/top-animation-logo";
import { UButlerLogo } from "~/home/client-logos/ubutler-logo";
import { Section, Stack } from "~/ui/layout";
import { Heading } from "~/ui/typography";

export function ClientsSection() {
  return (
    <div className="border-b border-t border-white/10 bg-black bg-gradient-to-r from-black via-slate-900/50 to-black px-8 py-8 sm:px-0">
      <Section size="lg">
        <Stack gap={8} textAlign="center">
          <Heading as="h4">Past projects</Heading>

          <Stack
            alignItems="center"
            direction="horizontal"
            gap={{ base: 8, md: 16 }}
            justifyContent="center"
          >
            <TopAnimationLogo className="h-6 fill-white lg:h-8" />

            <ProductboardLogo className="h-6 fill-white lg:h-8" />

            <UButlerLogo className="h-6 fill-white lg:h-8" />
          </Stack>
        </Stack>
      </Section>
    </div>
  );
}
