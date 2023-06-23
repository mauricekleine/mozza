import { caminoQa, preparationsQa } from "~/data/camino-qa";
import { Markdown } from "~/markdown";
import { Accordion, AccordionItem } from "~/ui/accordion";
import { Box, Container } from "~/ui/layout";
import { Header, Link, Text } from "~/ui/typography";

import styles from "./page.module.css";

export default function Page() {
  return (
    <Container className={styles.container} gap={8} width="sm">
      <Box gap={4}>
        <Box
          alignItems="center"
          direction="horizontal"
          justifyContent="between"
        >
          <Header as="h2">FAQ</Header>

          <Link href="/camino">Back</Link>
        </Box>

        <Text color="gray.200">
          Questions are added continuously as they pop up.
        </Text>
      </Box>

      <Box gap={2} justifyContent="start" textAlign="left">
        <Header as="h3">Preparations</Header>

        <Accordion type="multiple">
          {preparationsQa.map((qa) => (
            <AccordionItem
              header={qa.question}
              key={qa.question}
              value={qa.question}
            >
              <Markdown>{qa.answer}</Markdown>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>

      <Box gap={2} justifyContent="start" textAlign="left">
        <Header as="h3">General</Header>

        <Accordion type="multiple">
          {caminoQa.map((qa) => (
            <AccordionItem
              header={qa.question}
              key={qa.question}
              value={qa.question}
            >
              <Markdown>{qa.answer}</Markdown>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Container>
  );
}
