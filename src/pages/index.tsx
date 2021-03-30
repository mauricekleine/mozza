import Display from "../components/display";
import Heading from "../components/heading";
import Link from "../components/link";
import Section from "../components/section";

const Home = () => {
  return (
    <>
      <Section>
        <div className="space-y-4">
          <Display>Hey! 🤙</Display>

          <span>
            If you somehow stumbled upon this page and you would like to get in
            touch, hit me up through any of the channels above.
          </span>
        </div>
      </Section>

      <Section odd>
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
        <Display>Talk to me about</Display>

        <p>🌍 remote work</p>
        <p>🧠 mental health</p>
        <p>🧘‍♂️ meditation</p>
        <p>🙇‍♂️ philosophy</p>
        <p>🛸 the future</p>
        <p>🤝 people management</p>
        <p>🚀 product management</p>
        <p>👨‍💻 javascript & typescript</p>
        <p>📠 tech</p>
        <p>🌯 mexican food</p>
        <p>🍻 craft beers</p>
        <p>😳 bunnies</p>

        <p className="flex space-x-2 mt-8">
          <span>🐰 yep, </span>
          <Link href="https://www.instagram.com/bunniesofamsterdam/">
            bunnies
          </Link>
        </p>
      </Section>

      <Section odd>
        <Display>In the wild</Display>

        <div className="space-y-8">
          <div>
            <Heading>Videos</Heading>

            <ul className="list-disc space-y-3">
              <li>
                <Link href="https://www.youtube-nocookie.com/embed/6erqtEfHozU">
                  Building the Foundations of Remote Work
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Heading>Articles</Heading>

            <ul className="list-disc space-y-3">
              <li>
                <Link href="https://www.productboard.com/blog/supporting-mental-health/">
                  Supporting mental health the productboard way
                </Link>
              </li>

              <li>
                <Link href="https://www.linkedin.com/pulse/how-we-want-do-remote-productboard-maurice-kleine/">
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
                  What I’ve done, learned, and taught during my first 4 weeks as
                  a front-end engineer at productboard!
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Heading>Podcasts</Heading>

            <ul className="list-disc space-y-3">
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
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <Display>Pet projects</Display>

        <div className="space-y-8">
          <div className="space-y-2">
            <Link href="https://sedsngo.org/">
              <Heading>🌱 SEDS</Heading>
            </Link>

            <p>
              The Social Education and Development Society (SEDS) is a NGO that
              has been actively involved in socially transforming initiatives
              and rural development for over 38 years near the town of Penukonda
              in Andhra Pradesh, India. I created and maintain their homepage.
            </p>

            <Link href="https://github.com/mauricekleine/seds">source</Link>
          </div>

          <div className="space-y-2">
            <Link href="https://tinnies.xyz/">
              <Heading>🍺 Tinnies</Heading>
            </Link>

            <p>
              Beer tracking, but better. Mainly a playground for me to mess
              around with cool new technologies.
            </p>

            <Link href="https://github.com/mauricekleine/tinnies">source</Link>
          </div>

          <div className="space-y-2">
            <Link href="https://the-remote-work-library.now.sh">
              <Heading>📚 The Remote Work Library [Archived]</Heading>
            </Link>

            <p>A curated list of remote work resources.</p>

            <Link href="https://github.com/mauricekleine/the-remote-work-library">
              source
            </Link>
          </div>

          <div className="space-y-2">
            <Link href="https://mauricekleine.com.com/">
              <Heading>🤙 This website</Heading>
            </Link>

            <p>Yep, the website you&apos;re looking at right now.</p>

            <Link href="https://github.com/mauricekleine/mk-website">
              source
            </Link>
          </div>
        </div>
      </Section>

      <Section odd>
        <Display>Cya 👋</Display>
      </Section>
    </>
  );
};

export default Home;
