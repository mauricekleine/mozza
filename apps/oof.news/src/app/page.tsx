import { redirect } from "next/navigation";

import { serverConfig } from "~/config/server";
import { Button } from "~/ui/button";
import { Input } from "~/ui/form";
import { Box, Container } from "~/ui/layout";
import { Header, Text } from "~/ui/typography";

export const runtime = "edge";

async function subscribe(data: FormData) {
  "use server";

  const response = await fetch(
    `https://api.beehiiv.com/v2/publications/${serverConfig.BEEHIIV_PUBLICATION_ID}/subscriptions`,
    {
      body: JSON.stringify({ email: data.get("email") }),
      headers: {
        Authorization: `Bearer ${serverConfig.BEEHIIV_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    },
  );

  if (response.ok) {
    return redirect("/?subscribed=true");
  }

  return redirect("/?subscribed=false");
}

type Props = {
  searchParams?: { subscribed?: string };
};

export default async function Page({ searchParams }: Props) {
  const isSubscribed = searchParams?.subscribed === "true";
  const isNotSubscribed = searchParams?.subscribed === "false";

  return (
    <Container
      alignItems="center"
      gap={16}
      height="screen"
      justifyContent="center"
      width="md"
    >
      <Box alignItems="center" gap={2} textAlign="center">
        <Header as="h1">OOF</Header>

        <Text
          color="gray.300"
          lineHeight="tight"
          size={{ base: "xl", md: "2xl" }}
          tracking="tight"
        >
          Drum & Bass events agenda, announcements and new releases.
        </Text>
      </Box>

      <Box alignItems="center" gap={4} justifyContent="center">
        <Box action={subscribe} as="form" direction="horizontal" gap={2}>
          <Input name="email" placeholder="Email address" type="email" />

          <Button
            isDisabled={isSubscribed || isNotSubscribed}
            type="submit"
            variant="primary"
          >
            Subscribe
          </Button>
        </Box>

        {isSubscribed && (
          <Text color="green" size="sm">
            Subscribed!
          </Text>
        )}

        {isNotSubscribed && (
          <Text color="red" size="sm">
            Something went wrong. Try again later.
          </Text>
        )}
      </Box>
    </Container>
  );
}
