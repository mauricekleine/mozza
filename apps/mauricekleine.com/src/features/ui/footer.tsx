import { GithubLogo, Heart, LinkedinLogo } from "@mozza-icons/react";
import { Stack } from "@mozza-ui/react";

import { Button, Section, Text } from "~/ui";

export function Footer() {
  return (
    <div className="bottom-0 z-30 w-full border-t border-slate-200/10 bg-black">
      <Section>
        <div className="flex items-center justify-center py-4">
          <Stack direction="vertical" gap={4} items="center">
            <Stack direction="horizontal" gap={16} items="center">
              <Button
                as="a"
                href="https://github.com/mauricekleine/"
                iconLeft={GithubLogo}
                size="sm"
                variant="tertiary"
              >
                Github
              </Button>

              <Button
                as="a"
                href="https://www.linkedin.com/in/mauricekleine/"
                iconLeft={LinkedinLogo}
                size="sm"
                variant="tertiary"
              >
                LinkedIn
              </Button>
            </Stack>

            <div className="border-t border-white/5 px-8 pt-2">
              <Text family="serif" size="xs">
                Made with <Heart className="h-4 w-4 text-pink-600" /> in
                Amsterdam
              </Text>
            </div>
          </Stack>
        </div>
      </Section>
    </div>
  );
}
