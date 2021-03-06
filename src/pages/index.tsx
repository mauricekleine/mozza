import Image from "next/image";

import Center from "../components/center";
import Heading from "../components/heading";
import Link from "../components/link";
import Section from "../components/section";
import Text from "../components/text";
import Title from "../components/title";

const Home = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col items-center space-y-4">
          <img
            alt="Maurice Kleine"
            className="bg-white h-56 w-56 rounded-full"
            src="/maurice-kleine.png"
          />

          <div className="flex items-center justify-center space-x-2">
            <Link href="https://github.com/mauricekleine">
              <Image height={36} src="/github.svg" width={36} />
            </Link>

            <Link href="https://www.goodreads.com/mauricekleine">
              <Image height={36} src="/goodreads.svg" width={36} />
            </Link>

            <Link href="https://www.linkedin.com/in/mauricekleine/">
              <Image height={36} src="/linkedin.svg" width={36} />
            </Link>

            <Link href="https://twitter.com/therealfluncle">
              <Image height={36} src="/twitter.svg" width={36} />
            </Link>
          </div>
        </div>
      </Section>

      <Section odd>
        <div className="flex flex-col items-center justify-evenly mb-4 sm:justify-center">
          <div className="flex justify-center"></div>

          <div className="pb-8">
            <Title outline="left">Hey! 🤙</Title>

            <Text>
              If you somehow stumbled upon this page and you would like to get
              in touch, hit me up!
            </Text>

            <Link href="mailto:hey@mauricekleine.com">
              hey@mauricekleine.com
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <Title>I value</Title>

        <Center>
          <div className="mb-6">
            <Heading>Growth and self-actualisation</Heading>
            <p>To learn is to be alive</p>
          </div>

          <div className="mb-6">
            <Heading>Compassion and inclusion</Heading>
            <p>Being judgemental is a thing of the past</p>
          </div>

          <div className="mb-6">
            <Heading>Openness and honesty</Heading>
            <p>Sharing is caring is sharing is caring</p>
          </div>

          <div className="mb-6">
            <Heading>Open-mindedness and experimentation</Heading>
            <p>
              Traditions are overrated and rules are meant to be critically
              examined
            </p>
          </div>

          <div>
            <Heading>Ownership and accountability</Heading>
            <p>Finger-pointers beware</p>
          </div>
        </Center>
      </Section>

      <Section odd>
        <Title>Talk to me about</Title>

        <Center>
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

          <p className="mt-8">
            🐰 yep,{" "}
            <Link href="https://www.instagram.com/bunniesofamsterdam/">
              bunnies
            </Link>
          </p>
        </Center>
      </Section>

      <Section>
        <Title>In the wild</Title>

        <div className="mb-8">
          <Heading>Videos</Heading>

          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-2 rounded-md w-full"
            frameBorder="0"
            height="315"
            src="https://www.youtube-nocookie.com/embed/6erqtEfHozU"
            title="Building the Foundations of Remote Work - Maurice Kleine"
            width="560"
          ></iframe>
        </div>

        <div className="mb-8">
          <Heading>Articles</Heading>

          <p className="py-1">
            <Link href="https://www.productboard.com/blog/supporting-mental-health/">
              Supporting mental health the productboard way
            </Link>
          </p>

          <p className="py-1">
            <Link href="https://www.linkedin.com/pulse/how-we-want-do-remote-productboard-maurice-kleine/">
              How we want to do remote at productboard 🌎
            </Link>
          </p>

          <p className="py-1">
            <Link href="https://theunsettledlife.com/2019/07/23/on-comfort-zones/">
              On Comfort Zones
            </Link>
          </p>

          <p className="pt-2">
            <Link href="https://www.productboard.com/blog/what-ive-done-learned-and-taught-during-my-first-4-weeks-as-a-front-end-engineer-at-productboard/">
              What I’ve done, learned, and taught during my first 4 weeks as a
              front-end engineer at productboard!
            </Link>
          </p>
        </div>

        <div className="mb-8">
          <Heading>Podcasts</Heading>

          <p className="py-1">
            <Link href="https://www.startremote.net/interviews/maurice-kleine">
              StartRemote #2: Maurice on how to build the first fully remote
              team
            </Link>
          </p>

          <p className="pt-2">
            <Link href="https://soundcloud.com/people-of-productboard/1-maurice">
              People of productboard episode #1: Maurice – Product Developer
            </Link>
          </p>
        </div>
      </Section>

      <Section odd>
        <Title>Pet projects</Title>

        <div className="space-y-16">
          <div>
            <Heading>🌱 SEDS</Heading>

            <Text>
              The Social Education and Development Society (SEDS) is a NGO that
              has been actively involved in socially transforming initiatives
              and rural development for over 38 years near the town of Penukonda
              in Andhra Pradesh, India. I created and maintain their homepage.
            </Text>

            <p className="flex">
              <span className="mr-4">
                🔗 <Link href="https://sedsngo.org/">website</Link>
              </span>

              <span>
                😺{" "}
                <Link href="https://github.com/mauricekleine/seds">source</Link>
              </span>
            </p>
          </div>

          <div>
            <Heading>🍺 Tinnies</Heading>

            <Text>
              Beer tracking, but better. Mainly a playground for me to mess
              around with cool new technologies.
            </Text>

            <p className="flex">
              <span className="mr-4">
                🔗 <Link href="https://tinnies.xyz/">website</Link>
              </span>

              <span>
                😺{" "}
                <Link href="https://github.com/mauricekleine/tinnies">
                  source
                </Link>
              </span>
            </p>
          </div>

          <div>
            <Heading>📚 The Remote Work Library</Heading>

            <Text>A curated list of remote work resources.</Text>

            <p className="flex">
              <span className="mr-4">
                🔗 <Link href="https://theremoteworklibrary.com/">website</Link>
              </span>

              <span>
                😺{" "}
                <Link href="https://github.com/mauricekleine/the-remote-work-library">
                  source
                </Link>
              </span>
            </p>
          </div>

          <div>
            <Heading>🤙 This website</Heading>

            <Text>Yep, the website you&apos;re looking at right now.</Text>

            <p className="flex">
              <span className="mr-4">
                🔗 <Link href="https://mauricekleine.com.com/">website</Link>
              </span>

              <span>
                😺{" "}
                <Link href="https://github.com/mauricekleine/mk-website">
                  source
                </Link>
              </span>
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <Title>Cya 👋</Title>
      </Section>
    </>
  );
};

export default Home;
