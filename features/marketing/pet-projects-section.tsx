import { Card, Heading, Link, Section, Stack, Text } from "~/design-system";
import { Cat } from "~/design-system/icon";

type PetProject = {
  archived?: boolean;
  description: string;
  name: string;
  repo: string;
  url?: string;
};

const petProjects: PetProject[] = [
  {
    description:
      "The Social Education and Development Society (SEDS) is a NGO that has been actively involved in socially transforming initiatives and rural development for over 38 years near the town of Penukonda in Andhra Pradesh, India. I created and maintain their homepage.",
    name: "🌱 SEDS",
    repo: "https://github.com/mauricekleine/seds",
    url: "https://sedsngo.org",
  },
  {
    description: "A powerful and modern RSS feed reader ",
    name: "📖 RSS Power",
    repo: "https://github.com/mauricekleine/rss-power",
    url: "https://rsspower.com",
  },
  {
    archived: true,
    description:
      "Beer tracking, but better. Mainly a playground for me to mess around with cool new technologies.",
    name: "🍺 Tinnies",
    repo: "https://github.com/mauricekleine/tinnies",
  },
  {
    archived: true,
    description: "A curated list of remote work resources.",
    name: "📚 The Remote Work Library",
    repo: "https://github.com/mauricekleine/the-remote-work-library",
  },
  {
    description: "Yep, the website you're looking at right now.",
    name: "🤙 This website",
    repo: "https://github.com/mauricekleine/personal-website",
    url: "https://mauricekleine.com/",
  },
];

export function PetProjectsSection() {
  return (
    <Section>
      <Card>
        <Card.Icon icon={Cat} />

        <Card.Title>Pet Projects</Card.Title>

        <Stack gap={8}>
          {petProjects.map((project) => (
            <Stack key={project.name} gap={1}>
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
        </Stack>
      </Card>
    </Section>
  );
}
