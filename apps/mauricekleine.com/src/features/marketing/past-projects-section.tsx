"use client";

import { Grid, Stack } from "@mozza-ui/react";
import { motion } from "framer-motion";

import { Card, Heading, Section, Text } from "~/ui";

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
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Stack gap={8} justify="center" textAlign="center">
        <Section>
          <Stack gap={2}>
            <Heading as="h2">Past Projects</Heading>

            <Text color={300}>
              From start-up, to scale-up, across all kinds of industries
            </Text>
          </Stack>
        </Section>

        <Section>
          <Card>
            <Grid
              columns={{ base: 2, lg: 5, sm: 3 }}
              gap={8}
              items="center"
              justify="center"
              rows={{ base: "none", md: 2 }}
            >
              <LogoLink href="https://ubutler.nl/" logo={UButlerLogo} />

              <LogoLink href="https://quest.app/" logo={QuestLogo} />

              <LogoLink
                href="https://productboard.com/"
                logo={ProductboardLogo}
              />

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

              <LogoLink
                href="https://animatiewerk.nl/"
                logo={TopAnimationLogo}
              />

              <LogoLink href="https://distrivers.nl/" logo={DistriversLogo} />
            </Grid>
          </Card>
        </Section>
      </Stack>
    </motion.div>
  );
}
