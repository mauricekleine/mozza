import { Grid, Heading, Section, Stack, Text } from "~/design-system";

import {
  AeonLogo,
  DistriversLogo,
  GoodupLogo,
  KlippaLogo,
  LogoLink,
  ProductboardLogo,
  QuestLogo,
  StormDigitalLogo,
  TopAnimationLogo,
  UButlerLogo,
  VacanceSelectLogo,
} from "./client-logos";

export function PastProjectsSection() {
  return (
    <Stack gap={8} justifyContent="center" textAlign="center">
      <Section>
        <Stack gap={4}>
          <Heading as="h2">Past Projects</Heading>

          <Section>
            <Text color={300}>
              From start-up, to scale-up, across all kinds of industries
            </Text>
          </Section>
        </Stack>
      </Section>

      <div className="border-b border-t border-slate-200/10 bg-black bg-gradient-to-r from-black via-slate-900/50 to-black px-8 py-8 sm:px-0">
        <Section>
          <Grid
            alignItems="center"
            columns={{ base: 2, md: 5 }}
            gap={8}
            justifyItems="center"
            rows={{ base: "none", md: 2 }}
          >
            <LogoLink href="https://ubutler.nl/" logo={UButlerLogo} />

            <LogoLink
              href="https://productboard.com/"
              logo={ProductboardLogo}
            />

            <LogoLink href="https://quest.app/" logo={QuestLogo} />

            <LogoLink href="https://aeon.co/" logo={AeonLogo} />

            <LogoLink href="https://goodup.com/" logo={GoodupLogo} />

            <LogoLink href="https://klippa.com/" logo={KlippaLogo} />

            <LogoLink
              href="https://www.crunchbase.com/organization/storm-digital/"
              logo={StormDigitalLogo}
            />

            <LogoLink
              href="https://vacanceselect.recruitee.com/"
              logo={VacanceSelectLogo}
            />

            <LogoLink href="https://animatiewerk.nl/" logo={TopAnimationLogo} />

            <LogoLink href="https://distrivers.nl/" logo={DistriversLogo} />
          </Grid>
        </Section>
      </div>
    </Stack>
  );
}
