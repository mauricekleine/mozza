import { GithubLogo, LinkedinLogo } from "@mozza-icons/react";

import { Button } from "~/ui/button";

import { Box } from "./box";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <Box
      alignItems="center"
      className={styles.footer}
      direction="horizontal"
      gap={4}
      justifyContent="center"
      width="md"
    >
      <Button
        as="a"
        href="https://github.com/mauricekleine/"
        size="sm"
        variant="tertiary"
      >
        <GithubLogo />

        <span>Github</span>
      </Button>

      <Button
        as="a"
        href="https://www.linkedin.com/in/mauricekleine/"
        size="sm"
        variant="tertiary"
      >
        <LinkedinLogo />

        <span>LinkedIn</span>
      </Button>
    </Box>
  );
}
