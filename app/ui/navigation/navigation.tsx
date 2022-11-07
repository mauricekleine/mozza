"use client";

import Image from "next/image";

import { Link, Text } from "~/ui/typography";

import { Section, Stack } from "../layout";

import { SocialLinks } from "./social-links";

export function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-black to-transparent backdrop-blur-lg">
      <Section>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" type="nav">
            <Stack alignItems="center" direction="horizontal" gap={2}>
              <div className="h-10 w-10 rounded-full bg-white p-0.5">
                <Image
                  alt="Maurice Kleine"
                  className="rounded-full"
                  height={256}
                  src="/maurice-kleine.png"
                  width={256}
                />
              </div>

              <Text weight="bold">Maurice Kleine</Text>
            </Stack>
          </Link>

          <SocialLinks />
        </div>
      </Section>
    </nav>
  );
}
