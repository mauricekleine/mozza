import { HandWaving, PaperPlaneTilt } from "@mozza-icons/react";
import { Grid, Stack, Tooltip, TooltipProvider } from "@mozza-ui/react";
import Image from "next/image";

import { ContactFormDialog } from "~/contact-form";
import { hardSkills } from "~/data/hard-skills";
import { petProjects } from "~/data/pet-projects";
import { portfolio } from "~/data/portfolio";
import { softSkills } from "~/data/soft-skills";
import { LogoLink } from "~/ui";
import { Button, Card, Header, Link, Section, Text } from "~/ui";
import { ServicesCard } from "~/ui/services-card";

export default function Page() {
  return (
    <>
      <Section>
        <Stack gap={8} height="screen" items="center" justify="center">
          <Stack gap={4} items="center" textAlign="center">
            <Header as="h1">Maurice Kleine</Header>

            <Header as="h4">
              I like to solve problems, in product teams with a strong vision.
              Sometimes I do this with code, other times by coaching and
              mentoring the people in those teams. I understand that fast
              iteration is the key to building amazing products.
            </Header>
          </Stack>

          <Stack direction="horizontal" gap={4} items="center" justify="center">
            <Button as="a" href="https://www.linkedin.com/in/mauricekleine/">
              LinkedIn
            </Button>

            <ContactFormDialog>
              <Button iconLeft={PaperPlaneTilt} variant="primary">
                Contact
              </Button>
            </ContactFormDialog>
          </Stack>
        </Stack>
      </Section>

      <Stack gap={{ base: 64 }}>
        {/* Hard skills */}
        <Section size="sm" subtitle="Languages, tools and frameworks I love">
          <Stack direction="horizontal" gap={8} justify="center" wrap>
            <TooltipProvider>
              {hardSkills.map((skill) => {
                return (
                  <Stack items="center" justify="center" key={skill.title}>
                    <Tooltip
                      className="z-50 rounded-lg border border-white/50 bg-black px-4 py-2 drop-shadow-lg"
                      content={skill.title}
                    >
                      <svg
                        className="h-8 w-8 md:h-10 md:w-10"
                        name={skill.title}
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={skill.icon.path} fill="currentColor" />
                      </svg>
                    </Tooltip>
                  </Stack>
                );
              })}
            </TooltipProvider>
          </Stack>
        </Section>

        {/* Soft skills */}
        <Section size="lg" title="Expertise">
          <Grid
            columns={{ base: 1, md: 2, sm: 2 }}
            gap={4}
            rows={{ base: 6, md: 3, sm: 3 }}
          >
            {softSkills.map(({ description, icon, title }) => {
              return (
                <ServicesCard key={title}>
                  <ServicesCard.Title icon={icon}>{title}</ServicesCard.Title>

                  <ServicesCard.Description>
                    {description}
                  </ServicesCard.Description>
                </ServicesCard>
              );
            })}
          </Grid>
        </Section>

        {/* Portfolio */}
        <Section subtitle="Trusted by">
          <Grid
            columns={{ base: 2, lg: 5, sm: 3 }}
            gap={8}
            items="center"
            justify="center"
            rows={{ base: "none", md: 2 }}
          >
            {portfolio.map(({ link, logo }) => {
              return <LogoLink href={link} key={link} logo={logo} />;
            })}
          </Grid>
        </Section>

        {/* Intro section */}
        <Section>
          <Card>
            <Card.Icon icon={HandWaving} />

            <Card.Title>Hi, nice to meet you!</Card.Title>

            <Stack gap={4}>
              <Text weight="bold">
                To me, the most important goal in life is to learn new things -
                whether that be professionally in my career, or in my personal
                life while meeting new people, discovering new places and trying
                new things.
              </Text>

              <Stack
                direction={{ base: "vertical", lg: "horizontal" }}
                gap={{ base: 8, md: 16 }}
                items="center"
              >
                <Stack gap={4}>
                  <Text>
                    <Text as="span">
                      You can find out more about me by reading articles I wrote
                      about{" "}
                    </Text>

                    <Link href="https://www.linkedin.com/pulse/how-we-want-do-remote-productboard-maurice-kleine/">
                      remote work
                    </Link>

                    <Text as="span">, </Text>

                    <Link href="https://theunsettledlife.com/2019/07/23/on-comfort-zones/">
                      comfort zones
                    </Link>

                    <Text as="span"> and </Text>

                    <Link href="https://www.productboard.com/blog/supporting-mental-health/">
                      mental health in the work place
                    </Link>

                    <Text as="span">; by reading </Text>

                    <Link href="https://www.productboard.com/blog/what-ive-done-learned-and-taught-during-my-first-4-weeks-as-a-front-end-engineer-at-productboard/">
                      this article
                    </Link>

                    <Text as="span"> or listening to </Text>

                    <Link href="https://soundcloud.com/people-of-productboard/1-maurice/">
                      this podcast
                    </Link>

                    <Text as="span">
                      {" "}
                      about my time at Productboard; by listening to a podcast

                      in which{" "}
                    </Text>

                    <Link href="https://open.spotify.com/episode/3q9fPb4zXXPhANnfzT0gyD?si=1b09a3bdd93e4fb5">
                      I get interviewed about remote work
                    </Link>

                    <Text as="span">; or by watching the recording of </Text>

                    <Link href="https://www.youtube-nocookie.com/embed/6erqtEfHozU">
                      a meetup I organized about remote work
                    </Link>

                    <Text as="span">.</Text>
                  </Text>

                  <Text>
                    <Text as="span">You can find my open source work on </Text>

                    <Link href="https://github.com/mauricekleine/">GitHub</Link>

                    <Text as="span">
                      , or browse my experience and skills on{" "}
                    </Text>

                    <Link href="https://www.linkedin.com/in/mauricekleine/">
                      LinkedIn
                    </Link>

                    <Text as="span">.</Text>
                  </Text>
                </Stack>

                <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-blue-900 via-black to-red-900 md:min-w-[10rem]">
                  <Image
                    alt="Maurice Kleine"
                    className="absolute inset-0 -z-10 animate-pulse rounded-full opacity-60 blur-md"
                    height={256}
                    src="/maurice-kleine.jpeg"
                    width={256}
                  />

                  <Image
                    alt="Maurice Kleine"
                    className="rounded-full opacity-90"
                    height={256}
                    src="/maurice-kleine.jpeg"
                    width={256}
                  />
                </div>
              </Stack>
            </Stack>
          </Card>
        </Section>

        {/* Pet projects */}
        <div className="border-t border-slate-200/10 bg-black bg-gradient-to-r from-black via-slate-900/50 to-black px-8 py-16 sm:px-0">
          <Section title="Passion Projects">
            <Stack gap={8}>
              <Stack gap={1}>
                <Header as="h3">SEDS</Header>

                <div>
                  <Text as="span">
                    The Social Education and Development Society (SEDS) is a NGO
                    that has been actively involved in socially transforming
                    initiatives and rural development for over 38 years near the
                    town of Penukonda in Andhra Pradesh, India. I created and
                    maintain their homepage.
                  </Text>

                  <Stack direction="horizontal" gap={2}>
                    <Link href="https://sedsngo.org">website</Link>

                    <Link href="https://github.com/mauricekleine/seds">
                      source
                    </Link>
                  </Stack>
                </div>
              </Stack>

              <Grid columns={{ base: 1, md: 2 }} gap={8}>
                {petProjects.map((project) => (
                  <Stack gap={1} key={project.name}>
                    <Header as="h3">{project.name}</Header>

                    <div>
                      <Text as="span">{project.description}</Text>

                      <Stack direction="horizontal" gap={2}>
                        {project.url ? (
                          <Link href={project.url}>website</Link>
                        ) : null}

                        <Link href={project.repo}>source</Link>
                      </Stack>
                    </div>
                  </Stack>
                ))}
              </Grid>
            </Stack>
          </Section>
        </div>
      </Stack>
    </>
  );
}
