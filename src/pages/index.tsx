import Display from "../components/display";
import Heading from "../components/heading";
import Link from "../components/link";
import Section from "../components/section";
import SpaceContainer from "../components/space-container";
import Tag from "../components/tag";
import petProjects from "../data/pet-projects";

const Home = () => (
  <>
    <Section>
      <SpaceContainer>
        <Display>Hey! 🤙</Display>

        <Heading>
          If you somehow stumbled upon this page and you would like to get in
          touch, hit me up through any of the channels above. Talk to me about:
        </Heading>

        <p>
          <Tag>🌍 remote work</Tag>
          <Tag>🧠 mental health</Tag>
          <Tag>🧘‍♂️ meditation</Tag>
          <Tag>🙇‍♂️ philosophy</Tag>
          <Tag>🛸 the future</Tag>
          <Tag>🥊 boxing</Tag>
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
      </SpaceContainer>
    </Section>

    <Section>
      <Display>I value</Display>

      <SpaceContainer size="lg">
        <div>
          <Heading>Growth and self-actualisation</Heading>
          <span>To learn is to be alive</span>
        </div>

        <div>
          <Heading>Compassion and inclusion</Heading>
          <span>Being judgemental is a thing of the past</span>
        </div>

        <div>
          <Heading>Openness and honesty</Heading>
          <span>Sharing is caring is sharing is caring</span>
        </div>

        <div>
          <Heading>Open-mindedness and experimentation</Heading>
          <span>
            Traditions are overrated and rules are meant to be critically
            examined
          </span>
        </div>

        <div>
          <Heading>Ownership and accountability</Heading>
          <span>Finger-pointers beware</span>
        </div>
      </SpaceContainer>
    </Section>

    <Section>
      <Display>In the wild</Display>

      <SpaceContainer size="xl">
        <div>
          <Heading>Videos</Heading>

          <SpaceContainer element="ul" size="sm">
            <li>
              <Link href="https://www.youtube-nocookie.com/embed/6erqtEfHozU">
                Building the Foundations of Remote Work
              </Link>
            </li>
          </SpaceContainer>
        </div>

        <div>
          <Heading>Articles</Heading>

          <SpaceContainer element="ul" size="sm">
            <li>
              <Link href="https://www.productboard.com/blog/supporting-mental-health/">
                Supporting mental health the productboard way
              </Link>
            </li>

            <li>
              <Link href="https://www.linkedin.com/pdivse/how-we-want-do-remote-productboard-maurice-kleine/">
                How we want to do remote at productboard 🌎
              </Link>
            </li>

            <li>
              <Link href="https://theunsettledlife.com/2019/07/23/on-comfort-zones/">
                On Comfort Zones
              </Link>
            </li>

            <li>
              <Link href="https://www.productboard.com/blog/what-ive-done-learned-and-taught-during-my-first-4-weeks-as-a-front-end-engineer-at-productboard/">
                What I’ve done, learned, and taught during my first 4 weeks as a
                front-end engineer at productboard!
              </Link>
            </li>
          </SpaceContainer>
        </div>

        <div>
          <Heading>Podcasts</Heading>

          <SpaceContainer element="ul" size="sm">
            <li>
              <Link href="https://www.startremote.net/interviews/maurice-kleine">
                StartRemote #2: Maurice on how to build the first fully remote
                team
              </Link>
            </li>

            <li>
              <Link href="https://soundcloud.com/people-of-productboard/1-maurice">
                People of productboard episode #1: Maurice – Product Developer
              </Link>
            </li>
          </SpaceContainer>
        </div>
      </SpaceContainer>
    </Section>

    <Section>
      <Display>Pet projects</Display>

      <SpaceContainer size="xl">
        {petProjects.map((project) => (
          <div key={project.name}>
            <div className="flex items-center space-x-2">
              <Link href={project.url}>{project.name}</Link>

              <div className="font-mono text-sm">
                <span className="mr-2">|</span>

                <Link href={project.repo}>source</Link>
              </div>
            </div>

            <p>{project.description}</p>
          </div>
        ))}
      </SpaceContainer>
    </Section>
  </>
);

export default Home;
