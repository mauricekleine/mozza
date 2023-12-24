import { CaretDown, PaperPlaneTilt } from "@mozza-icons/react";
import { ToastProvider, TooltipProvider } from "@mozza-ui/react";

import { ContactFormDialog } from "~/contact-form";
import { hardSkills } from "~/data/hard-skills";
import { petProjects } from "~/data/pet-projects";
import { portfolio } from "~/data/portfolio";
import { softSkills } from "~/data/soft-skills";
import { ProfilePicture } from "~/images/profile-picture";
import { SubthreadLogo } from "~/images/subthread-logo";
import { HardSkillLogo, LogoLink } from "~/logos";
import { Navigation } from "~/navigation";
import { Button } from "~/ui/button";
import { Card } from "~/ui/card";
import { Icon } from "~/ui/icon";
import { Box, Container, Footer } from "~/ui/layout";
import { Header, Link, Text } from "~/ui/typography";

export const runtime = "edge";

export default function Page() {
  return (
    <>
      <Navigation />

      <ToastProvider>
        <TooltipProvider>
          <Box gap={64}>
            <Container
              alignItems="center"
              height="screen"
              justifyContent="evenly"
              style={{ paddingTop: "6rem" }}
              width="md"
            >
              <Box alignItems="center" gap={16} textAlign="center">
                <Box alignItems="center" gap={4} textAlign="center">
                  <Header as="h1">Maurice Kleine</Header>

                  <Container width="lg">
                    <Text color="gray.300" size={{ base: "xl", md: "2xl" }}>
                      I like solving problems in product teams that have a
                      strong vision. Sometimes I do this with code, and other
                      times by coaching and mentoring the people on those teams.
                      I understand that fast iteration is key to building
                      amazing products.
                    </Text>
                  </Container>
                </Box>

                <Box
                  alignItems="center"
                  direction="horizontal"
                  gap={4}
                  justifyContent="center"
                >
                  <Button
                    as="a"
                    href="https://www.linkedin.com/in/mauricekleine/"
                    variant="secondary"
                  >
                    LinkedIn
                  </Button>

                  <ContactFormDialog>
                    <Button variant="primary">
                      <Icon icon={PaperPlaneTilt} />

                      <span>Contact</span>
                    </Button>
                  </ContactFormDialog>
                </Box>
              </Box>

              <Box alignItems="center" justifyContent="center">
                <Icon icon={CaretDown} />
              </Box>
            </Container>

            {/* Intro section */}
            <Container width="md">
              <Card gap={8} variant="neon">
                <Card.Title>Subthread</Card.Title>

                <Box
                  alignItems="center"
                  direction={{ base: "vertical", lg: "horizontal" }}
                  gap={{ base: 8, md: 16 }}
                >
                  <Box gap={4}>
                    <Text as="p">
                      <>
                        Subthread is a product studio to help companies big and
                        small go from idea to product that I co-founded with
                        fellow creative technologist, AI engineer and product
                        manager{" "}
                      </>

                      <Link href="https://toonverbeek.com/">Toon Verbeek</Link>

                      <>. To find out more, check out our website at </>

                      <Link href="https://subthread.io">subthread.io</Link>

                      <>.</>
                    </Text>
                  </Box>

                  <SubthreadLogo />
                </Box>
              </Card>
            </Container>

            {/* Hard skills */}
            <Container
              alignItems="center"
              gap={8}
              justifyContent="center"
              textAlign="center"
              width="sm"
            >
              <Text color="gray.400" tracking="tight" transform="uppercase">
                Languages, tools and frameworks I love
              </Text>

              <Box
                direction="horizontal"
                gap={8}
                justifyContent="center"
                wrap="wrap"
              >
                {hardSkills.map((skill) => {
                  return (
                    <HardSkillLogo
                      key={skill.title}
                      path={skill.icon.path}
                      title={skill.title}
                    />
                  );
                })}
              </Box>
            </Container>

            {/* Soft skills */}
            <Container
              alignItems="center"
              gap={8}
              justifyContent="center"
              width="lg"
            >
              <Header as="h2">Expertise</Header>

              <Box columns={{ base: 1, md: 2 }} display="grid" gap={4}>
                {softSkills.map(({ description, icon, title }) => {
                  const SkillIcon = icon;

                  return (
                    <Card gap={4} key={title}>
                      <Box alignItems="center" direction="horizontal" gap={2}>
                        <Icon color="gray.200" icon={SkillIcon} />

                        <Header as="h3">{title}</Header>
                      </Box>

                      <Text color="gray.300">{description}</Text>
                    </Card>
                  );
                })}
              </Box>
            </Container>

            {/* Portfolio */}
            <Container
              alignItems="center"
              gap={8}
              justifyContent="center"
              width="sm"
            >
              <Text color="gray.400" tracking="tight" transform="uppercase">
                Trusted By
              </Text>

              <Box
                alignItems="center"
                direction="horizontal"
                gap={12}
                justifyContent="center"
                wrap="wrap"
              >
                {portfolio.map(({ link, logo, title }) => {
                  return (
                    <LogoLink
                      aria-label={title}
                      href={link}
                      key={link}
                      logo={logo}
                    />
                  );
                })}
              </Box>
            </Container>

            {/* Intro section */}
            <Container width="md">
              <Card gap={8} variant="neon">
                <Card.Title>Hi, nice to meet you!</Card.Title>

                <Box
                  alignItems="center"
                  direction={{ base: "vertical", lg: "horizontal" }}
                  gap={{ base: 8, md: 16 }}
                >
                  <Box gap={4}>
                    <Text>
                      <>
                        You can find out more about me by reading articles I
                        wrote about{" "}
                      </>
                      <Link href="https://www.linkedin.com/pulse/how-we-want-do-remote-productboard-maurice-kleine/">
                        remote work
                      </Link>

                      <>, </>
                      <Link href="https://theunsettledlife.com/2019/07/23/on-comfort-zones/">
                        comfort zones
                      </Link>

                      <> and </>
                      <Link href="https://www.productboard.com/blog/supporting-mental-health/">
                        mental health in the work place
                      </Link>

                      <>; by reading </>
                      <Link href="https://www.productboard.com/blog/what-ive-done-learned-and-taught-during-my-first-4-weeks-as-a-front-end-engineer-at-productboard/">
                        this article
                      </Link>

                      <> or listening to </>
                      <Link href="https://soundcloud.com/people-of-productboard/1-maurice/">
                        this podcast
                      </Link>

                      <> about my time at Productboard; </>

                      <>by listening to </>
                      <Link href="https://open.spotify.com/episode/3q9fPb4zXXPhANnfzT0gyD?si=1b09a3bdd93e4fb5">
                        a podcast
                      </Link>

                      <> in which I get interviewed about remote work;</>

                      <> or by watching </>
                      <Link href="https://www.youtube-nocookie.com/embed/6erqtEfHozU">
                        the recording
                      </Link>

                      <> of a meetup I organized about remote work.</>
                    </Text>

                    <Text>
                      <>You can find my open source work on </>
                      <Link href="https://github.com/mauricekleine/">
                        GitHub
                      </Link>

                      <> or browse my experience and skills on </>
                      <Link href="https://www.linkedin.com/in/mauricekleine/">
                        LinkedIn
                      </Link>

                      <>.</>
                    </Text>
                  </Box>

                  <ProfilePicture />
                </Box>
              </Card>
            </Container>

            {/* Pet projects */}
            <Card variant="callout">
              <Container alignItems="center" gap={8} width="md">
                <Header as="h2">Passion Projects</Header>

                <Box gap={8}>
                  <Box gap={2}>
                    <Header as="h3">SEDS</Header>

                    <Text>
                      The Social Education and Development Society (SEDS) is a
                      NGO that has been actively involved in socially
                      transforming initiatives and rural development for over 38
                      years near the town of Penukonda in Andhra Pradesh, India.
                      I created and maintain their homepage.
                    </Text>

                    <Box direction="horizontal" gap={2}>
                      <Text size="sm">
                        <Link href="https://sedsngo.org">website</Link>
                      </Text>

                      <Text size="sm">
                        <Link href="https://github.com/mauricekleine/seds">
                          source
                        </Link>
                      </Text>
                    </Box>
                  </Box>

                  <Box columns={{ base: 1, md: 2 }} display="grid" gap={8}>
                    {petProjects.map((project) => (
                      <Box gap={2} key={project.name}>
                        <Header as="h3">{project.name}</Header>

                        <Text>{project.description}</Text>

                        <Box direction="horizontal" gap={2}>
                          {"url" in project ? (
                            <Text size="sm">
                              <Link href={project.url}>website</Link>
                            </Text>
                          ) : null}

                          {"repo" in project ? (
                            <Text size="sm">
                              <Link href={project.repo}>source</Link>
                            </Text>
                          ) : null}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Container>
            </Card>
          </Box>
        </TooltipProvider>
      </ToastProvider>

      <Footer />
    </>
  );
}
