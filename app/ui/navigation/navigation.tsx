"use client";

import Image from "next/image";
import Link from "next/link";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

import { ContactFormDialog } from "~/contact-form/contact-form-dialog";
import { Text } from "~/ui/typography";

import { Section, Stack } from "../layout";

export function Navigation() {
  return (
    <nav className="fixed top-0 z-30 w-full border-b border-slate-200/10 bg-gradient-to-b from-black to-transparent backdrop-blur-lg">
      <Section>
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
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

              <div className="hidden sm:inline-block">
                <Text weight="bold">Maurice Kleine</Text>
              </div>
            </Stack>
          </Link>

          <Stack alignItems="center" direction="horizontal" gap={4}>
            <Stack alignItems="center" direction="horizontal" gap={2}>
              <Link
                className="p-1"
                href="https://github.com/mauricekleine"
                type="nav"
              >
                <GithubLogo className="h-4 w-4 fill-white" />
              </Link>

              <Link
                className="-mr-1 p-1"
                href="https://www.linkedin.com/in/mauricekleine/"
                type="nav"
              >
                <LinkedinLogo className="h-4 w-4 fill-white" />
              </Link>
            </Stack>

            <div className="h-8 border-r border-slate-200/40" />

            <ContactFormDialog buttonSize="sm" buttonVariant="outline" />
          </Stack>
        </div>
      </Section>
    </nav>
  );
}
