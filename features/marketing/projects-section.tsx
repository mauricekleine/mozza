import {
  Card,
  Cat,
  Heading,
  Link,
  Section,
  Stack,
  Text,
} from "~/design-system";

import petProjects from "./pet-projects";

export function ProjectsSection() {
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
