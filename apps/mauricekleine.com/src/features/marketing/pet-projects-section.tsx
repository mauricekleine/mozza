import { Grid, Stack } from "@mozza-ui/react";

import { Heading, Link, Section, Text } from "~/ui";

type PetProject = {
  description: string;
  name: string;
  repo: string;
  url?: string;
};

const petProjects: PetProject[] = [
  {
    description: "A powerful and modern RSS feed reader ",
    name: "📖 RSS Power",
    repo: "https://github.com/mauricekleine/rss-power",
  },
  {
    description:
      "Beer tracking, but better. Mainly a playground for me to mess around with cool new technologies.",
    name: "🍺 Tinnies",
    repo: "https://github.com/mauricekleine/tinnies",
  },
  {
    description: "A curated list of remote work resources.",
    name: "📚 The Remote Work Library",
    repo: "https://github.com/mauricekleine/the-remote-work-library",
  },
  {
    description: "Yep, the website you're looking at right now.",
    name: "🤙 This website",
    repo: "https://github.com/mauricekleine/mauricekleine.com",
    url: "https://mauricekleine.com/",
  },
];

export function PetProjectsSection() {
  return (
    <div className="border-t border-slate-200/10 bg-black bg-gradient-to-r from-black via-slate-900/50 to-black px-8 py-16 sm:px-0">
      <Section>
        <Stack gap={8}>
          <Heading as="h2">Passion Projects</Heading>

          <Stack gap={1}>
            <Heading as="h3">SEDS</Heading>

            <div>
              <Text>
                The Social Education and Development Society (SEDS) is a NGO
                that has been actively involved in socially transforming
                initiatives and rural development for over 38 years near the
                town of Penukonda in Andhra Pradesh, India. I created and
                maintain their homepage.
              </Text>

              <Stack direction="horizontal" gap={2}>
                <Text>
                  <Link href="https://sedsngo.org">website</Link>
                </Text>

                <Text>
                  <Link href="https://github.com/mauricekleine/seds">
                    source
                  </Link>
                </Text>
              </Stack>
            </div>
          </Stack>

          <Grid columns={{ base: 1, md: 2 }} gap={8}>
            {petProjects.map((project) => (
              <Stack gap={1} key={project.name}>
                <Heading as="h3">{project.name}</Heading>

                <div>
                  <Text>{project.description}</Text>

                  <Stack direction="horizontal" gap={2}>
                    {project.url ? (
                      <Text>
                        <Link href={project.url}>website</Link>
                      </Text>
                    ) : null}

                    <Text>
                      <Link href={project.repo}>source</Link>
                    </Text>
                  </Stack>
                </div>
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Section>
    </div>
  );
}
