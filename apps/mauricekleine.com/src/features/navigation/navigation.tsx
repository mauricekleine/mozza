import { Stack } from "@mozza-ui/react";
import Image from "next/image";
import Link from "next/link";

import { Section, Text } from "~/ui";

import { NavigationContactButton } from "./navigation-contact-button";

export function Navigation() {
  return (
    <nav className="fixed top-0 z-30 w-full border-b border-slate-200/10 bg-gradient-to-b from-black to-transparent backdrop-blur-lg">
      <Section>
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Stack direction="horizontal" gap={2} items="center">
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

          <Stack direction="horizontal" gap={4} items="center">
            <NavigationContactButton />
          </Stack>
        </div>
      </Section>
    </nav>
  );
}
