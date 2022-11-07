"use client";

import Image from "next/image";
import { HandWaving } from "phosphor-react";

import { Card } from "~/ui/card";
import { Section, Stack } from "~/ui/layout";
import { ExternalLink, Text } from "~/ui/typography";

export function IntroSection() {
  return (
    <Section>
      <Card>
        <Card.Icon icon={HandWaving} />

        <Card.Title>Hi! I&apos;m Maurice</Card.Title>

        <Stack gap={2}>
          <Text weight="bold">
            To me, the most important goal in life is to learn new things -
            whether that be professionally in my career, or in my personal life
            while meeting new people, discovering new places and trying new
            things.
          </Text>

          <Stack
            alignItems="center"
            direction={{ base: "vertical", lg: "horizontal" }}
            gap={{ base: 8, md: 16 }}
          >
            <Stack gap={2}>
              <Text as="p">
                <Text>
                  You can find out more about me by reading articles I wrote
                  about{" "}
                </Text>

                <ExternalLink href="https://www.linkedin.com/pulse/how-we-want-do-remote-productboard-maurice-kleine/">
                  remote work
                </ExternalLink>

                <Text>, </Text>

                <ExternalLink href="https://theunsettledlife.com/2019/07/23/on-comfort-zones/">
                  comfort zones
                </ExternalLink>

                <Text> and </Text>

                <ExternalLink href="https://www.productboard.com/blog/supporting-mental-health/">
                  mental health in the work place
                </ExternalLink>

                <Text>; by reading </Text>

                <ExternalLink href="https://www.productboard.com/blog/what-ive-done-learned-and-taught-during-my-first-4-weeks-as-a-front-end-engineer-at-productboard/">
                  this article
                </ExternalLink>

                <Text> or listening to </Text>

                <ExternalLink href="https://soundcloud.com/people-of-productboard/1-maurice/">
                  this podcast
                </ExternalLink>

                <Text>
                  {" "}
                  about my time at Productboard; by listening to a podcast in
                  which{" "}
                </Text>

                <ExternalLink href="https://open.spotify.com/episode/3q9fPb4zXXPhANnfzT0gyD?si=1b09a3bdd93e4fb5">
                  I get interviewed about remote work
                </ExternalLink>

                <Text>; or by watching the recording of </Text>

                <ExternalLink href="https://www.youtube-nocookie.com/embed/6erqtEfHozU">
                  a meetup I organized about remote work
                </ExternalLink>

                <Text>.</Text>
              </Text>

              <Text as="p">
                <Text>You can find my open source work on </Text>

                <ExternalLink href="https://github.com/mauricekleine/">
                  GitHub
                </ExternalLink>

                <Text>, browse my experience and skills on </Text>

                <ExternalLink href="https://www.linkedin.com/in/mauricekleine/">
                  LinkedIn
                </ExternalLink>

                <Text>
                  , or keep scrolling if you want to learn what value I can add
                  to your company or project.
                </Text>
              </Text>
            </Stack>

            <div className="relative h-40 w-40 rounded-full bg-gradient-to-br from-blue-900 via-black to-red-900 md:min-w-[10rem]">
              <Image
                alt="Maurice Kleine"
                className="absolute inset-0 -z-10 animate-pulse rounded-full opacity-60 blur-md"
                height={256}
                src="/maurice-kleine.jpeg"
                width={256}
              />

              <Image
                alt="Maurice Kleine"
                className="rounded-full opacity-75"
                height={256}
                src="/maurice-kleine.jpeg"
                width={256}
              />
            </div>
          </Stack>
        </Stack>
      </Card>
    </Section>
  );
}
