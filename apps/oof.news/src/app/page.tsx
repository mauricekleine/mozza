import { Button } from "~/ui/button";
import { Input } from "~/ui/form";
import { Box, Container, Footer } from "~/ui/layout";
import { Header, Text } from "~/ui/typography";

export const runtime = "edge";

export default function Page() {
  return (
    <>
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

        <Box
          alignItems="center"
          direction="horizontal"
          gap={4}
          justifyContent="center"
        >
          <Box as="form" direction="horizontal" gap={2}>
            <Input name="email" placeholder="Email address" type="email" />

            <Button type="submit" variant="primary">
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>

      <Footer />
    </>
  );
}
