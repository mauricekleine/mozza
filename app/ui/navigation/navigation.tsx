"use client";

import Image from "next/image";

import { Link } from "~/ui/typography";

import { Stack } from "../layout";

import { SocialLinks } from "./social-links";

export function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-black to-transparent backdrop-blur-lg">
      <div className="mx-auto flex h-16 items-center justify-between px-8 sm:w-4/6 sm:px-0 md:w-4/5 lg:w-3/5">
        <Link href="/" type="nav">
          <Stack alignItems="center" direction="horizontal" gap={2}>
            <div className="h-10 w-10 rounded-full bg-white p-0.5">
              <Image
                alt="Maurice Kleine"
                className="h-9 w-9 object-contain"
                height={256}
                src="/maurice-kleine.png"
                width={256}
              />
            </div>

            <span className="hidden font-bold sm:inline-block">
              Maurice Kleine
            </span>
          </Stack>
        </Link>

        <SocialLinks />
      </div>
    </nav>
  );
}
