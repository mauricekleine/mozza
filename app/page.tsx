import petProjects from "~/data/pet-projects";
import Display from "~/ui/display";
import Heading from "~/ui/heading";
import Link from "~/ui/link";
import SpaceContainer from "~/ui/space-container";
import Tag from "~/ui/tag";

export default function HomePage() {
  return (
    <>
      <Display>Hey! 🤙</Display>

      <SpaceContainer size="xl">
        <div>
          <Heading>
            If you somehow stumbled upon this page and you would like to get in
            touch, hit me up through any of the channels above. Talk to me
            about:
          </Heading>

          <p className="mt-4">
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
          </p>
        </div>

        <div>
          <Display>In the wild</Display>

          <SpaceContainer size="md">
            <div>
              <Heading>Videos</Heading>

              <SpaceContainer size="sm">
                <p>
                  <Link href="https://www.youtube-nocookie.com/embed/6erqtEfHozU">
                    Building the Foundations of Remote Work
                  </Link>
                </p>
              </SpaceContainer>
            </div>

            <div>
              <Heading>Articles</Heading>

              <SpaceContainer size="xs">
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
              </SpaceContainer>
            </div>

            <div>
              <Heading>Podcasts</Heading>

              <SpaceContainer size="xs">
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
              </SpaceContainer>
            </div>
          </SpaceContainer>
        </div>

        <div>
          <Display>Pet projects</Display>

          <SpaceContainer size="md">
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
          </SpaceContainer>
        </div>
      </SpaceContainer>
    </>
  );
}
