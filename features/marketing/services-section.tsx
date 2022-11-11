import { Grid, Heading, Section, Stack, Text } from "~/design-system";
import {
  Atom,
  Boat,
  Database,
  RocketLaunch,
  Stack as StackIcon,
  UsersThree,
} from "~/design-system/icon";

import { ServicesCard } from "./services-card";

export function ServicesSection() {
  return (
    <Section size="lg">
      <Stack gap={8} justifyContent="center" textAlign="center">
        <Stack gap={4}>
          <Heading as="h2">Expertise</Heading>

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
          columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
          gap={4}
          rows={{ base: 6, sm: 3, md: 3, lg: 2 }}
        >
          <ServicesCard>
            <ServicesCard.Icon icon={Boat} />

            <ServicesCard.Title>Ship Features</ServicesCard.Title>

            <ServicesCard.Description>
              The backlog is never-ending and speed is of the essence; if
              you&apos;re looking to increase your team&apos;s velocity by
              releasing features faster, look no further.
            </ServicesCard.Description>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Icon icon={Atom} />

            <ServicesCard.Title>Developer Experience</ServicesCard.Title>

            <ServicesCard.Description>
              Slow build times? Pipelines that are still running after you get a
              coffee, twice? Untyped codebase causing easily avoidable bugs?
              Monorepos? I got you.
            </ServicesCard.Description>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Icon icon={StackIcon} />

            <ServicesCard.Title>Design Systems</ServicesCard.Title>

            <ServicesCard.Description>
              At the core of a a great UX sits a well-implemented design system:
              composable, consistent, and with accessibility always in mind. I
              can help you with that.
            </ServicesCard.Description>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Icon icon={Database} />

            <ServicesCard.Title>DevOps & Infrastructure</ServicesCard.Title>

            <ServicesCard.Description>
              From setting up software workflows, to creating and maintaining
              acceptance, staging and production environments that are
              automatically deployed.
            </ServicesCard.Description>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Icon icon={RocketLaunch} />

            <ServicesCard.Title>Product Management</ServicesCard.Title>

            <ServicesCard.Description>
              Nothing is as frustrating as shipping features that are not used.
              Listening to your users, capturing their insights and translating
              that into high-confidence roadmaps.
            </ServicesCard.Description>
          </ServicesCard>

          <ServicesCard>
            <ServicesCard.Icon icon={UsersThree} />

            <ServicesCard.Title>Engineering Management</ServicesCard.Title>

            <ServicesCard.Description>
              Coaching teams and team members, hiring and onboarding processes,
              and working cross-functionally in an agile way - I can help you
              improve all of this.
            </ServicesCard.Description>
          </ServicesCard>
        </Grid>
      </Stack>
    </Section>
  );
}
