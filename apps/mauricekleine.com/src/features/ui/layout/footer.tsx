import { Button } from "../button";
import { GithubLogo, Heart, LinkedinLogo } from "../icon";
import { Section, Stack } from "../layout";
import { Text } from "../typography";

export function Footer() {
  return (
    <div className="bottom-0 z-30 w-full border-t border-slate-200/10 bg-black">
      <Section>
        <div className="flex items-center justify-center py-4">
          <Stack alignItems="center" direction="vertical" gap={4}>
            <Stack alignItems="center" direction="horizontal" gap={16}>
              <Button
                as="a"
                href="https://github.com/mauricekleine/"
                iconLeft={GithubLogo}
                size="sm"
                variant="link"
              >
                Github
              </Button>

              <Button
                as="a"
                href="https://www.linkedin.com/in/mauricekleine/"
                iconLeft={LinkedinLogo}
                size="sm"
                variant="link"
              >
                LinkedIn
              </Button>
            </Stack>

            <div className="border-t border-white/5 px-8 pt-2">
              <Text serif size="xs">
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
