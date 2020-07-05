/** @jsx createElement */
import { createElement } from "react";

import Center from "../components/center";
import Link from "../components/link";
import Section from "../components/section";

const Home = () => {
  return (
    <>
      <Section>
        <div className="flex justify-center">
          <img className="h-40 rounded-full w-40" src="/maurice-kleine.jpg" />
        </div>

        <div>
          <p className="font-bold text-6xl">Hey!</p>
          <p className="text-gray-700 text-2xl">
            If you somehow stumbled upon this page and you would like to get in
            touch, hit me up!
          </p>
        </div>

        <div className="mt-4">
          <Link href="mailto:hey@mauricekleine.com">
            💌 hey@mauricekleine.com
          </Link>

          <Link href="https://www.linkedin.com/in/mauricekleine/">
            🤝 @mauricekleine
          </Link>

          <Link href="https://www.instagram.com/clocksandquestionmarks/">
            📷 @clocksandquestionmarks
          </Link>
        </div>
      </Section>

      <Section>
        <Center>
          <p className="text-4xl">I value</p>

          <p className="text-blue-600 text-3xl">
            Growth and self-actualisation
          </p>
          <p>To learn is to be alive</p>

          <p className="text-blue-600 text-3xl">Compassion and inclusion</p>
          <p>Being judgemental is a thing of the past</p>

          <p className="text-blue-600 text-3xl">Openness and honesty</p>
          <p>Sharing is caring is sharing is caring</p>

          <p className="text-blue-600 text-3xl">
            Open-mindedness and experimentation
          </p>
          <p>
            Traditions are overrated and rules are meant to be critically
            examined
          </p>

          <p className="text-blue-600 text-3xl">Ownership and accountability</p>
          <p>Finger-pointers beware</p>
        </Center>
      </Section>

      <Section>
        <Center>
          <p className="text-4xl">Talk to me about</p>
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

          <p>Yep, bunnies 🐰🐰</p>
        </Center>
      </Section>

      <Section>
        <Center>
          <p className="text-4xl">In the wild</p>
        </Center>

        <Center>
          <p className="text-2xl">Videos</p>

          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
            frameBorder="0"
            height="315"
            src="https://www.youtube-nocookie.com/embed/6erqtEfHozU"
            width="560"
          ></iframe>
        </Center>

        <Center>
          <p className="text-2xl">Articles</p>

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
            What I’ve done, learned, and taught during my first 4 weeks as a
            front-end engineer at productboard!
          </Link>
        </Center>

        <Center>
          <p className="text-2xl">Podcasts</p>

          <Link href="https://www.startremote.net/interviews/maurice-kleine">
            StartRemote #2: Maurice on how to build the first fully remote team
          </Link>

          <Link href="https://soundcloud.com/people-of-productboard/1-maurice">
            People of productboard episode #1: Maurice – Product Developer
          </Link>
        </Center>
      </Section>
    </>
  );
};

export default Home;
