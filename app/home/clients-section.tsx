import {
  DistriversLogo,
  GoodupLogo,
  KlippaLogo,
  LogoLink,
  ProductboardLogo,
  QuestLogo,
  TopAnimationLogo,
  UButlerLogo,
} from "~/home/client-logos";
import { Grid, Section, Stack } from "~/ui/layout";
import { Heading } from "~/ui/typography";

import { VacanceSelectLogo } from "./client-logos/vacance-select-logo";

export function ClientsSection() {
  return (
    <div className="border-b border-t border-white/10 bg-black bg-gradient-to-r from-black via-slate-900/50 to-black px-8 py-8 sm:px-0">
      <Section size="lg">
        <Stack gap={8} textAlign="center">
          <Heading as="h4">Past projects</Heading>

          <Grid
            alignItems="center"
            columns={{ base: 2, md: 4 }}
            gap={{ base: 4, md: 8 }}
            justifyItems="center"
            rows={{ base: "none", md: 2 }}
          >
            <LogoLink href="https://ubutler.nl/" logo={UButlerLogo} />

            <LogoLink
              href="https://productboard.com/"
              logo={ProductboardLogo}
            />

            <LogoLink href="https://quest.app/" logo={QuestLogo} />

            <LogoLink href="https://goodup.com/" logo={GoodupLogo} />

            <LogoLink href="https://klippa.com/" logo={KlippaLogo} />

            <LogoLink
              href="https://vacanceselect.recruitee.com/"
              logo={VacanceSelectLogo}
            />

            <LogoLink href="https://animatiewerk.nl/" logo={TopAnimationLogo} />

            <LogoLink href="https://distrivers.nl/" logo={DistriversLogo} />
          </Grid>
        </Stack>
      </Section>
    </div>
  );
}
