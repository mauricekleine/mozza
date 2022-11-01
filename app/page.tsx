import petProjects from "~/pet-projects";
import { Stack } from "~/ui/layout";
import { Heading, Link, Tag, Typewriter } from "~/ui/typography";

export default function HomePage() {
  return (
    <Stack gap="gap-32">
      <Stack gap="gap-10">
        <Stack alignItems="center">
          <Heading as="h1">Maurice Kleine</Heading>

          <Heading>
            <Stack direction="horizontal" gap="gap-1">
              <span>Freelance</span>

              <Typewriter
                text={[
                  "Software",
                  "Frontend",
                  "Backend",
                  "Full-stack",
                  "Product",
                  "UX/UI",
                ]}
              />

              <span>Engineer</span>
            </Stack>
          </Heading>
        </Stack>

        <Stack direction="orthogonal" gap="gap-2" justifyContent="center">
          <Tag>📠 tech</Tag>

          <Tag>👨‍💻 javascript</Tag>

          <Tag>🧠 psychology</Tag>

          <Tag>🧘‍♂️ meditation</Tag>

          <Tag>🏃‍♂️ Running</Tag>

          <Tag>📚 Reading</Tag>

          <Tag>🙇‍♂️ philosophy</Tag>

          <Tag>🛸 the future</Tag>

          <Tag>🌯 mexican food</Tag>

          <Tag>🍻 craft beers</Tag>

          <Tag>🐰 bunnies</Tag>
        </Stack>
      </Stack>

      <Stack gap="gap-8">
        <Heading as="h1">In the wild</Heading>

        <Stack gap="gap-2">
          <Heading>Videos</Heading>

          <Stack gap="gap-2">
            <Link href="https://www.youtube-nocookie.com/embed/6erqtEfHozU">
              Building the Foundations of Remote Work
            </Link>
          </Stack>
        </Stack>

        <Stack gap="gap-2">
          <Heading>Articles</Heading>

          <Stack gap="gap-2">
            <Link href="https://www.productboard.com/blog/supporting-mental-health/">
              Supporting mental health the productboard way
            </Link>

            <Link href="https://www.linkedin.com/pdivse/how-we-want-do-remote-productboard-maurice-kleine/">
              How we want to do remote at productboard 🌎
            </Link>

            <Link href="https://theunsettledlife.com/2019/07/23/on-comfort-zones/">
              On Comfort Zones
            </Link>

            <Link href="https://www.productboard.com/blog/what-ive-done-learned-and-taught-during-my-first-4-weeks-as-a-front-end-engineer-at-productboard/">
              What I’ve done, learned, and taught during my first 4 weeks as a
              front-end engineer at productboard!
            </Link>
          </Stack>
        </Stack>

        <Stack gap="gap-2">
          <Heading>Podcasts</Heading>

          <Stack gap="gap-2">
            <Link href="https://www.startremote.net/interviews/maurice-kleine">
              StartRemote #2: Maurice on how to build the first fully remote
              team
            </Link>

            <Link href="https://soundcloud.com/people-of-productboard/1-maurice">
              People of productboard episode #1: Maurice – Product Developer
            </Link>
          </Stack>
        </Stack>
      </Stack>

      <Stack gap="gap-8">
        <Heading as="h1">Pet projects</Heading>

        <Stack gap="gap-8">
          {petProjects.map((project) => (
            <div key={project.name}>
              <Stack alignItems="center" direction="horizontal" gap="gap-2">
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

              <p>{project.description}</p>
            </div>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
