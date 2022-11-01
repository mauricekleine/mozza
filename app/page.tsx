import petProjects from "~/pet-projects";
import { Stack } from "~/ui/layout";
import { Heading, Link, Tag } from "~/ui/typography";

export default function HomePage() {
  return (
    <div>
      <Heading as="h1">Hey! 🤙</Heading>

      <Stack gap="gap-32">
        <Stack gap="gap-4">
          <Heading>
            If you somehow stumbled upon this page and you would like to get in
            touch, hit me up through any of the channels above. Talk to me
            about:
          </Heading>

          <Stack direction="horizontal" gap="gap-2">
            <Tag>🌍 remote work</Tag>

            <Tag>🧠 mental health</Tag>

            <Tag>🧘‍♂️ meditation</Tag>

            <Tag>🙇‍♂️ philosophy</Tag>

            <Tag>🛸 the future</Tag>

            <Tag>🤝 people management</Tag>

            <Tag>🚀 product management</Tag>

            <Tag>👨‍💻 javascript & typescript</Tag>

            <Tag>📠 tech</Tag>

            <Tag>🌯 mexican food</Tag>

            <Tag>🍻 craft beers</Tag>

            <Tag href="https://www.instagram.com/bunniesofamsterdam/">
              🐰 bunnies
            </Tag>
          </Stack>
        </Stack>

        <div>
          <Heading as="h1">In the wild</Heading>

          <Stack gap="gap-8">
            <div>
              <Heading>Videos</Heading>

              <Stack gap="gap-2">
                <p>
                  <Link href="https://www.youtube-nocookie.com/embed/6erqtEfHozU">
                    Building the Foundations of Remote Work
                  </Link>
                </p>
              </Stack>
            </div>

            <div>
              <Heading>Articles</Heading>

              <Stack gap="gap-2">
                <p>
                  <Link href="https://www.productboard.com/blog/supporting-mental-health/">
                    Supporting mental health the productboard way
                  </Link>
                </p>

                <p>
                  <Link href="https://www.linkedin.com/pdivse/how-we-want-do-remote-productboard-maurice-kleine/">
                    How we want to do remote at productboard 🌎
                  </Link>
                </p>

                <p>
                  <Link href="https://theunsettledlife.com/2019/07/23/on-comfort-zones/">
                    On Comfort Zones
                  </Link>
                </p>

                <p>
                  <Link href="https://www.productboard.com/blog/what-ive-done-learned-and-taught-during-my-first-4-weeks-as-a-front-end-engineer-at-productboard/">
                    What I’ve done, learned, and taught during my first 4 weeks
                    as a front-end engineer at productboard!
                  </Link>
                </p>
              </Stack>
            </div>

            <div>
              <Heading>Podcasts</Heading>

              <Stack gap="gap-2">
                <p>
                  <Link href="https://www.startremote.net/interviews/maurice-kleine">
                    StartRemote #2: Maurice on how to build the first fully
                    remote team
                  </Link>
                </p>

                <p>
                  <Link href="https://soundcloud.com/people-of-productboard/1-maurice">
                    People of productboard episode #1: Maurice – Product
                    Developer
                  </Link>
                </p>
              </Stack>
            </div>
          </Stack>
        </div>

        <div>
          <Heading as="h1">Pet projects</Heading>

          <Stack gap="gap-8">
            {petProjects.map((project) => (
              <div key={project.name}>
                <div className="flex items-center space-x-2">
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
                </div>

                <p>{project.description}</p>
              </div>
            ))}
          </Stack>
        </div>
      </Stack>
    </div>
  );
}
