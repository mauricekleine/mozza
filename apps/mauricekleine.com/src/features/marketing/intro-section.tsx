"use client";

import { Stack } from "@mozza-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Card, Link, Section, Text } from "@mk/ui";
import { HandWaving } from "@mk/ui/icon";

export function IntroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <Section>
        <Card>
          <Card.Icon icon={HandWaving} />

          <Card.Title>Hi, nice to meet you!</Card.Title>

          <Stack gap={4}>
            <Text weight="bold">
              To me, the most important goal in life is to learn new things -
              whether that be professionally in my career, or in my personal
              life while meeting new people, discovering new places and trying
              new things.
            </Text>

            <Stack
              direction={{ base: "vertical", lg: "horizontal" }}
              gap={{ base: 8, md: 16 }}
              items="center"
            >
              <Stack gap={4}>
                <Text as="p">
                  <Text>
                    You can find out more about me by reading articles I wrote
                    about{" "}
                  </Text>

                  <Link href="https://www.linkedin.com/pulse/how-we-want-do-remote-productboard-maurice-kleine/">
                    remote work
                  </Link>

                  <Text>, </Text>

                  <Link href="https://theunsettledlife.com/2019/07/23/on-comfort-zones/">
                    comfort zones
                  </Link>

                  <Text> and </Text>

                  <Link href="https://www.productboard.com/blog/supporting-mental-health/">
                    mental health in the work place
                  </Link>

                  <Text>; by reading </Text>

                  <Link href="https://www.productboard.com/blog/what-ive-done-learned-and-taught-during-my-first-4-weeks-as-a-front-end-engineer-at-productboard/">
                    this article
                  </Link>

                  <Text> or listening to </Text>

                  <Link href="https://soundcloud.com/people-of-productboard/1-maurice/">
                    this podcast
                  </Link>

                  <Text>
                    {" "}
                    about my time at Productboard; by listening to a podcast in
                    which{" "}
                  </Text>

                  <Link href="https://open.spotify.com/episode/3q9fPb4zXXPhANnfzT0gyD?si=1b09a3bdd93e4fb5">
                    I get interviewed about remote work
                  </Link>

                  <Text>; or by watching the recording of </Text>

                  <Link href="https://www.youtube-nocookie.com/embed/6erqtEfHozU">
                    a meetup I organized about remote work
                  </Link>

                  <Text>.</Text>
                </Text>

                <Text as="p">
                  <Text>You can find my open source work on </Text>

                  <Link href="https://github.com/mauricekleine/">GitHub</Link>

                  <Text>, or browse my experience and skills on </Text>

                  <Link href="https://www.linkedin.com/in/mauricekleine/">
                    LinkedIn
                  </Link>

                  <Text>.</Text>
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
                  className="rounded-full opacity-90"
                  height={256}
                  src="/maurice-kleine.jpeg"
                  width={256}
                />
              </div>
            </Stack>
          </Stack>
        </Card>
      </Section>
    </motion.div>
  );
}
