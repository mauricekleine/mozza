"use client";

import { Cat } from "phosphor-react";

import petProjects from "~/home/pet-projects";
import { Card } from "~/ui/card";
import { Section, Stack } from "~/ui/layout";
import { ExternalLink, Heading, Text } from "~/ui/typography";

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
                      <ExternalLink href={project.url}>website</ExternalLink>
                    </Text>
                  ) : null}

                  <Text>
                    <ExternalLink href={project.repo}>source</ExternalLink>
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
