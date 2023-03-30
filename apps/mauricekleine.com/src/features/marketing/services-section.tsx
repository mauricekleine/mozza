"use client";

import { Grid, Stack } from "@mozza-ui/react";
import { motion } from "framer-motion";

import { Header, Section, Text } from "~/ui";
import {
  Atom,
  Boat,
  Database,
  RocketLaunch,
  Stack as StackIcon,
  UsersThree,
} from "~/ui/icon";

import { ServicesCard } from "./services-card";

export function ServicesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Section size="lg">
        <Stack gap={8} justify="center">
          <Stack gap={4} textAlign="center">
            <Header as="h2">Expertise</Header>

            <Section>
              <Text color={300}>
                I like to solve problems, in product teams with a strong vision.
                Sometimes I do this with code, other times by coaching and
                mentoring the people in those teams. I understand that fast
                iteration is the key to building amazing products.
              </Text>
            </Section>
          </Stack>

          <Grid
            columns={{ base: 1, md: 2, sm: 2 }}
            gap={4}
            rows={{ base: 6, md: 3, sm: 3 }}
          >
            <ServicesCard>
              <ServicesCard.Title icon={Boat}>Ship Features</ServicesCard.Title>

              <ServicesCard.Description>
                The backlog is never-ending and speed is of the essence; if
                you&apos;re looking to increase your team&apos;s velocity by
                releasing features faster, look no further.
              </ServicesCard.Description>
            </ServicesCard>

            <ServicesCard>
              <ServicesCard.Title icon={Atom}>
                Developer Experience
              </ServicesCard.Title>

              <ServicesCard.Description>
                Slow build times? Pipelines that are still running after you get
                a coffee, twice? Untyped codebase causing easily avoidable bugs?
                Monorepos? I got you.
              </ServicesCard.Description>
            </ServicesCard>

            <ServicesCard>
              <ServicesCard.Title icon={StackIcon}>
                Design Systems
              </ServicesCard.Title>

              <ServicesCard.Description>
                At the core of a a great UX sits a well-implemented design
                system: composable, consistent, and with accessibility always in
                mind. I can help you with that.
              </ServicesCard.Description>
            </ServicesCard>

            <ServicesCard>
              <ServicesCard.Title icon={Database}>
                DevOps & Infrastructure
              </ServicesCard.Title>

              <ServicesCard.Description>
                From setting up software workflows, to creating and maintaining
                acceptance, staging and production environments that are
                automatically deployed.
              </ServicesCard.Description>
            </ServicesCard>

            <ServicesCard>
              <ServicesCard.Title icon={RocketLaunch}>
                Product Management
              </ServicesCard.Title>

              <ServicesCard.Description>
                Nothing is as frustrating as shipping features that are not
                used. Listening to your users, capturing their insights and
                translating that into high-confidence roadmaps.
              </ServicesCard.Description>
            </ServicesCard>

            <ServicesCard>
              <ServicesCard.Title icon={UsersThree}>
                Engineering Management
              </ServicesCard.Title>

              <ServicesCard.Description>
                Coaching teams and team members, hiring and onboarding
                processes, and working cross-functionally in an agile way - I
                can help you improve all of this.
              </ServicesCard.Description>
            </ServicesCard>
          </Grid>
        </Stack>
      </Section>
    </motion.div>
  );
}
