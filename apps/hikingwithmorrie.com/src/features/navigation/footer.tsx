import { Grid, Stack } from "@mozza-ui/react";

import { Container } from "@/ui/layout";
import { Header, Text } from "@/ui/typography";

export function Footer() {
  return (
    <footer className="bg-black py-8 text-grey-light">
      <Container>
        <Stack gap={4}>
          <Grid columns={4} gap={16}>
            <Stack gap={2}>
              <Header as="h3" color="white">
                Company
              </Header>

              <ul className="list-none">
                <li>
                  <a href="#">About</a>
                </li>

                <li>
                  <a href="#">Careers</a>
                </li>

                <li>
                  <a href="#">Press</a>
                </li>

                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </Stack>

            <Stack gap={2}>
              <Header as="h3" color="white">
                Support
              </Header>

              <ul className="list-none">
                <li>
                  <a href="#">Help Center</a>
                </li>

                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </Stack>

            <Stack>&nbsp;</Stack>

            <Stack gap={2} textAlign="right">
              <Header as="h3" color="white">
                Hiking with Morrie
              </Header>

              <ul className="list-none">
                <li>
                  <Text size="sm">hi@hikingwithmorrie.nl</Text>
                </li>

                <li>
                  <Text size="sm">KVK: 76468410</Text>
                </li>

                <li>
                  <Text size="sm">BTW: NL001234567B01</Text>
                </li>
              </ul>
            </Stack>
          </Grid>

          <Stack
            direction="horizontal"
            gap={4}
            items="center"
            justify="end"
            textAlign="center"
          >
            <Text color="grey" size="sm">
              © {new Date().getFullYear()} Hiking with Morrie
            </Text>

            <Text color="grey" size="sm">
              Disclaimer
            </Text>

            <Text color="grey" size="sm">
              Privacy
            </Text>

            <Text color="grey" size="sm">
              Voorwaarden
            </Text>
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
}
