import { Grid } from "@mozza-ui/react";

import { Locale, getDictionary } from "~/i18n";
import { HeroSection } from "~/sections/hero-section";
import { Card, Container, Header } from "~/ui";

export default async function Page({
  params: { lang: locale },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(locale);

  return (
    <div>
      <HeroSection dictionary={dictionary} />

      <Container>
        <Header as="h2">Blog</Header>

        <Grid columns={3} gap={4}>
          <Card>
            <Card.Header>Card header</Card.Header>

            <Card.Body>
              Mollit cillum mollit officia. In elit sunt nostrud sint
              reprehenderit ex non exercitation est tempor dolore nisi ut do.
              Magna fugiat tempor occaecat ullamco quis id aliqua...
            </Card.Body>

            <Card.Footer>Read more</Card.Footer>
          </Card>

          <Card>
            <Card.Header>Card header</Card.Header>

            <Card.Body>
              Mollit cillum mollit officia. In elit sunt nostrud sint
              reprehenderit ex non exercitation est tempor dolore nisi ut do.
              Magna fugiat tempor occaecat ullamco quis id aliqua...
            </Card.Body>

            <Card.Footer>Read more</Card.Footer>
          </Card>

          <Card>
            <Card.Header>Card header</Card.Header>

            <Card.Body>
              Mollit cillum mollit officia. In elit sunt nostrud sint
              reprehenderit ex non exercitation est tempor dolore nisi ut do.
              Magna fugiat tempor occaecat ullamco quis id aliqua...
            </Card.Body>

            <Card.Footer>Read more</Card.Footer>
          </Card>
        </Grid>
      </Container>
    </div>
  );
}
