import Card from "../components/card";
import CardContent from "../components/card-content";
import CardTitle from "../components/card-title";
import Display from "../components/display";
import ExternalLink from "../components/external-link";
import Heading from "../components/heading";
import Section from "../components/section";
import Tag from "../components/tag";

const Home = () => (
  <>
    <Section>
      <div className="space-y-4">
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
      </div>
    </Section>

    <Section>
      <Display>I value</Display>

      <div className="space-y-8">
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
      </div>
    </Section>

    <Section>
      <Display>In the wild</Display>

      <div className="space-y-8">
        <div>
          <Heading>Videos</Heading>

          <ul className="list-disc space-y-3">
            <li>
              <ExternalLink href="https://www.youtube-nocookie.com/embed/6erqtEfHozU">
                Building the Foundations of Remote Work
              </ExternalLink>
            </li>
          </ul>
        </div>

        <div>
          <Heading>Articles</Heading>

          <ul className="list-disc space-y-3">
            <li>
              <ExternalLink href="https://www.productboard.com/blog/supporting-mental-health/">
                Supporting mental health the productboard way
              </ExternalLink>
            </li>

            <li>
              <ExternalLink href="https://www.linkedin.com/pulse/how-we-want-do-remote-productboard-maurice-kleine/">
                How we want to do remote at productboard 🌎
              </ExternalLink>
            </li>

            <li>
              <ExternalLink href="https://theunsettledlife.com/2019/07/23/on-comfort-zones/">
                On Comfort Zones
              </ExternalLink>
            </li>

            <li>
              <ExternalLink href="https://www.productboard.com/blog/what-ive-done-learned-and-taught-during-my-first-4-weeks-as-a-front-end-engineer-at-productboard/">
                What I’ve done, learned, and taught during my first 4 weeks as a
                front-end engineer at productboard!
              </ExternalLink>
            </li>
          </ul>
        </div>

        <div>
          <Heading>Podcasts</Heading>

          <ul className="list-disc space-y-3">
            <li>
              <ExternalLink href="https://www.startremote.net/interviews/maurice-kleine">
                StartRemote #2: Maurice on how to build the first fully remote
                team
              </ExternalLink>
            </li>

            <li>
              <ExternalLink href="https://soundcloud.com/people-of-productboard/1-maurice">
                People of productboard episode #1: Maurice – Product Developer
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </Section>

    <Section>
      <Display>Pet projects</Display>

      <div className="space-y-4">
        <Card>
          <CardContent>
            <CardTitle>
              <ExternalLink href="https://sedsngo.org/">🌱 SEDS</ExternalLink>
            </CardTitle>

            <p>
              The Social Education and Development Society (SEDS) is a NGO that
              has been actively involved in socially transforming initiatives
              and rural development for over 38 years near the town of Penukonda
              in Andhra Pradesh, India. I created and maintain their homepage.
            </p>

            <ExternalLink href="https://github.com/mauricekleine/seds">
              <span className="font-mono text-sm">source</span>
            </ExternalLink>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>
              <ExternalLink href="https://tinnies.xyx/">
                🍺 Tinnies
              </ExternalLink>
            </CardTitle>

            <p>
              Beer tracking, but better. Mainly a playground for me to mess
              around with cool new technologies.
            </p>

            <ExternalLink href="https://github.com/mauricekleine/tinnies">
              <span className="font-mono text-sm">source</span>
            </ExternalLink>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>
              <ExternalLink href="https://the-remote-work-library.now.sh">
                📚 The Remote Work Library [Archived]
              </ExternalLink>
            </CardTitle>

            <p>A curated list of remote work resources.</p>

            <ExternalLink href="https://github.com/mauricekleine/the-remote-work-library">
              <span className="font-mono text-sm">source</span>
            </ExternalLink>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>
              <ExternalLink href="https://mauricekleine.com.com/">
                🤙 This website
              </ExternalLink>
            </CardTitle>

            <p>Yep, the website you&apos;re looking at right now.</p>

            <ExternalLink href="https://github.com/mauricekleine/personal-website">
              <span className="font-mono text-sm">source</span>
            </ExternalLink>
          </CardContent>
        </Card>
      </div>
    </Section>
  </>
);

export default Home;
