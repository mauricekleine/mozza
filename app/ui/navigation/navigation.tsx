"use client";

import Image from "next/image";
import { PaperPlaneTilt } from "phosphor-react";

import { ButtonLink, Link, Text } from "~/ui/typography";

import { Section, Stack } from "../layout";

import { SocialLinks } from "./social-links";

export function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/10 bg-gradient-to-b from-black to-transparent backdrop-blur-lg">
      <Section>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" type="nav">
            <Stack alignItems="center" direction="horizontal" gap={2}>
              <div className="h-10 w-10 rounded-full bg-white p-0.5">
                <Image
                  alt="Maurice Kleine"
                  className="h-9 w-9 rounded-full object-contain"
                  height={72}
                  src="/logo.svg"
                  width={72}
                />
              </div>

              <Text weight="bold">Maurice Kleine</Text>
            </Stack>
          </Link>

          <ButtonLink
            as="button"
            iconLeft={PaperPlaneTilt}
            onClick={() => {}}
            size="sm"
            type="link"
          >
            Contact
          </ButtonLink>
        </div>
      </Section>
    </nav>
  );
}
