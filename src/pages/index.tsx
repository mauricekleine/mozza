/** @jsx createElement */
import { createElement } from "react";

import Center from "../components/center";
import HeadingOne from "../components/heading-one";
import HeadingThree from "../components/heading-three";
import HeadingTwo from "../components/heading-two";
import Link from "../components/link";
import Section from "../components/section";
import Subtitle from "../components/subtitle";
import Title from "../components/title";

const Home = () => {
  return (
    <>
      <Section>
        <div className="flex justify-center">
          <img
            alt="Maurice Kleine"
            className="h-40 rounded-full w-40"
            src="/maurice-kleine.jpg"
          />
        </div>

        <Title>Hey!</Title>
        <Subtitle>
          If you somehow stumbled upon this page and you would like to get in
          touch, hit me up!
        </Subtitle>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <p className="sm:mr-2">💌 email</p>

          <Link href="mailto:hey@mauricekleine.com">hey@mauricekleine.com</Link>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <p className="sm:mr-2">🤝 linkedin</p>

          <Link href="https://www.linkedin.com/in/mauricekleine/">
            @mauricekleine
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <p className="sm:mr-2">📷 insta</p>

          <Link href="https://www.instagram.com/clocksandquestionmarks/">
            @clocksandquestionmarks
          </Link>
        </div>
      </Section>

      <Section>
        <HeadingOne>I value</HeadingOne>

        <Center>
          <div className="mb-6">
            <HeadingTwo>Growth and self-actualisation</HeadingTwo>
            <p>To learn is to be alive</p>
          </div>

          <div className="mb-6">
            <HeadingTwo>Compassion and inclusion</HeadingTwo>
            <p>Being judgemental is a thing of the past</p>
          </div>

          <div className="mb-6">
            <HeadingTwo>Openness and honesty</HeadingTwo>
            <p>Sharing is caring is sharing is caring</p>
          </div>

          <div className="mb-6">
            <HeadingTwo>Open-mindedness and experimentation</HeadingTwo>
            <p>
              Traditions are overrated and rules are meant to be critically
              examined
            </p>
          </div>

          <div>
            <HeadingTwo>Ownership and accountability</HeadingTwo>
            <p>Finger-pointers beware</p>
          </div>
        </Center>
      </Section>

      <Section>
        <HeadingOne>Talk to me about</HeadingOne>

        <Center>
          <p>remote work 🌍</p>
          <p>mental health 🧠</p>
          <p>meditation 🧘‍♂️</p>
          <p>philosophy 🙇‍♂️</p>
          <p>the future 🛸</p>
          <p>people management 🤝</p>
          <p>product management 🚀</p>
          <p>javascript & typescript 👨‍💻</p>
          <p>tech 📠</p>
          <p>mexican food 🌯</p>
          <p>craft beers 🍻</p>
          <p>bunnies 😳</p>

          <p className="mt-8">Yep, bunnies 🐰🐰</p>
        </Center>
      </Section>

      <Section>
        <HeadingOne>In the wild</HeadingOne>

        <div className="mb-8">
          <HeadingThree>Videos</HeadingThree>

          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mt-2 rounded-md shadow w-full"
            frameBorder="0"
            height="315"
            src="https://www.youtube-nocookie.com/embed/6erqtEfHozU"
            title="Building the Foundations of Remote Work - Maurice Kleine"
            width="560"
          ></iframe>
        </div>

        <div className="mb-8">
          <HeadingThree>Articles</HeadingThree>

          <p className="py-2">
            <Link href="https://www.productboard.com/blog/supporting-mental-health/">
              Supporting mental health the productboard way
            </Link>
          </p>

          <p className="py-2">
            <Link href="https://www.linkedin.com/pulse/how-we-want-do-remote-productboard-maurice-kleine/">
              How we want to do remote at productboard 🌎
            </Link>
          </p>

          <p className="py-2">
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

        <div>
          <HeadingThree>Podcasts</HeadingThree>

          <p className="py-2">
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

      <Section>
        <HeadingOne>Pet projects</HeadingOne>

        <div className="mb-8">
          <HeadingThree>🌱 SEDS</HeadingThree>

          <p>
            The Social Education and Development Society (SEDS) is a NGO that
            has been actively involved in socially transforming initiatives and
            rural development for over 38 years near the town of Penukonda in
            Andhra Pradesh, India. I created and maintain their homepage.
          </p>

          <p className="mb-1">
            🔗 <Link href="https://sedsngo.org/">website</Link>
          </p>

          <p>
            😺 <Link href="https://github.com/mauricekleine/seds">source</Link>
          </p>
        </div>

        <div className="mb-8">
          <HeadingThree>🍺 Tinnies</HeadingThree>

          <p>
            Beer tracking, but better. Mainly a playground for me to mess around
            with cool new technologies.
          </p>

          <p className="mb-1">
            🔗 <Link href="https://tinnies.xyz/">website</Link>
          </p>

          <p>
            😺{" "}
            <Link href="https://github.com/mauricekleine/tinnies">source</Link>
          </p>
        </div>

        <div>
          <HeadingThree>📚 The Remote Work Library</HeadingThree>

          <p>A curated list of remote work resources.</p>

          <p className="mb-1">
            🔗 <Link href="https://theremoteworklibrary.com/">website</Link>
          </p>

          <p>
            😺{" "}
            <Link href="https://github.com/mauricekleine/the-remote-work-library">
              source
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
};

export default Home;
