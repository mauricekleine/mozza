import Image from "next/image";
import Link from "next/link";

import { Box, Container } from "~/ui/layout";
import { Text } from "~/ui/typography";

import { NavigationContactButton } from "./navigation-contact-button";
import styles from "./navigation.module.scss";

export function Navigation() {
  return (
    <nav className={styles["navigation-outer"]}>
      <Container
        alignItems="center"
        className={styles["navigation-inner"]}
        direction="horizontal"
        justifyContent="between"
        width="md"
      >
        <Box
          alignItems="center"
          as={Link}
          direction="horizontal"
          gap={2}
          href="/"
        >
          <div className={styles.logo}>
            <Image
              alt="Maurice Kleine"
              height={72}
              src="/logo.svg"
              width={72}
            />
          </div>

          <div className={styles.brand}>
            <Text weight="bold">Maurice Kleine</Text>
          </div>
        </Box>

        <NavigationContactButton />
      </Container>
    </nav>
  );
}
