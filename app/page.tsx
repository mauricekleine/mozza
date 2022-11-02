import { PageHeader } from "~/page-header";
import petProjects from "~/pet-projects";
import { Stack } from "~/ui/layout";
import { Heading, Link, Text } from "~/ui/typography";

export default function HomePage() {
  return (
    <Stack gap={32}>
      <div className="my-32">
        <PageHeader />
      </div>

      <Stack gap={6}>
        <Heading>In the wild</Heading>

        <Stack gap={2}>
          <Heading as="h3">Videos</Heading>

          <Stack gap={2}>
            <Link href="https://www.youtube-nocookie.com/embed/6erqtEfHozU">
              Building the Foundations of Remote Work
            </Link>
          </Stack>
        </Stack>

        <Stack>
          <Heading as="h3">Articles</Heading>

          <Stack gap={2}>
            <Link href="https://www.productboard.com/blog/supporting-mental-health/">
              Supporting mental health the productboard way
            </Link>

            <Link href="https://www.linkedin.com/pulse/how-we-want-do-remote-productboard-maurice-kleine/">
              How we want to do remote at productboard 🌎
            </Link>

            <Link href="https://theunsettledlife.com/2019/07/23/on-comfort-zones/">
              On Comfort Zones
            </Link>

            <Link href="https://www.productboard.com/blog/what-ive-done-learned-and-taught-during-my-first-4-weeks-as-a-front-end-engineer-at-productboard/">
              What I&apos;ve done, learned, and taught during my first 4 weeks
              as a front-end engineer at productboard!
            </Link>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Heading as="h3">Podcasts</Heading>

          <Stack gap={2}>
            <Link href="https://open.spotify.com/episode/3q9fPb4zXXPhANnfzT0gyD?si=1b09a3bdd93e4fb5">
              StartRemote #2: Maurice on how to build the first fully remote
              team
            </Link>

            <Link href="https://soundcloud.com/people-of-productboard/1-maurice">
              People of productboard episode #1: Maurice - Product Developer
            </Link>
          </Stack>
        </Stack>
      </Stack>

      <Stack gap={6}>
        <Heading>Pet projects</Heading>

        <Stack gap={8}>
          {petProjects.map((project) => (
            <div key={project.name}>
              <Stack alignItems="center" direction="horizontal" gap={2}>
                {project.url ? (
                  <Link href={project.url}>{project.name}</Link>
                ) : (
                  <p>
                    <span>{project.name} </span>

                    <span>{project.archived ? "[archived]" : null}</span>
                  </p>
                )}

                <div className="font-mono text-sm">
                  <span className="mr-2">|</span>

                  <Link href={project.repo}>source</Link>
                </div>
              </Stack>

              <Text>{project.description}</Text>
            </div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
