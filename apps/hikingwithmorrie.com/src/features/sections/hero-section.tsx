import { Stack } from "@mozza-ui/react";

import { Dictionary } from "~/i18n";
import { Container, Header, Text } from "~/ui";

type Props = {
  dictionary: Dictionary;
};

export const HeroSection = ({ dictionary }: Props) => {
  return (
    <section>
      <Stack gap={8}>
        <div className="min-h-80 bg-grey-dark p-8">
          <Container>
            <Stack
              direction={{ base: "vertical-reverse", md: "horizontal" }}
              gap={4}
              items={{ base: "center", md: "start" }}
              justify="between"
            >
              <Stack gap={8}>
                <Header as="h1" color="white">
                  {dictionary.homepage.hero.title}
                </Header>

                <Text color="grey.light">
                  {dictionary.homepage.hero.subtitle}
                </Text>
              </Stack>
            </Stack>
          </Container>
        </div>

        <div className="min-h-80 bg-white p-8">
          <Container>
            <Stack
              direction={{ base: "vertical-reverse", md: "horizontal" }}
              gap={4}
              items={{ base: "center", md: "start" }}
              justify="between"
            >
              <Stack gap={8}>
                <Header as="h1" color="green.dark">
                  {dictionary.homepage.hero.title}
                </Header>

                <Text color="grey.dark">
                  {dictionary.homepage.hero.subtitle}
                </Text>
              </Stack>
            </Stack>
          </Container>
        </div>

        <div className="min-h-80 bg-green-dark p-8">
          <Container>
            <Stack
              direction={{ base: "vertical-reverse", md: "horizontal" }}
              gap={4}
              items={{ base: "center", md: "start" }}
              justify="between"
            >
              <Stack gap={8}>
                <Header as="h1" color="white">
                  {dictionary.homepage.hero.title}
                </Header>

                <Text color="grey.light">
                  {dictionary.homepage.hero.subtitle}
                </Text>
              </Stack>
            </Stack>
          </Container>
        </div>
      </Stack>
    </section>
  );
};
