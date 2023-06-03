"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Box, Container } from "~/ui/layout";
import { Text } from "~/ui/typography";

import { NavigationContactButton } from "./navigation-contact-button";
import styles from "./navigation.module.scss";

export function Navigation() {
  const { scrollYProgress } = useScroll();
  const [isHalfwayPage, setIsHalfwayPage] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) {
      setIsHalfwayPage(true);
    }
  });

  if (!isHalfwayPage) {
    return null;
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
    >
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
    </motion.div>
  );
}
