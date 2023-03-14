"use client";

import { motion } from "framer-motion";

import { ContactFormDialog } from "@mk/contact-form";
import {
  Button,
  Heading,
  Section,
  Stack,
  Text,
  Typewriter,
} from "@mk/design-system";
import { ArrowUpRight, PaperPlaneTilt } from "@mk/design-system/icon";

export function HeroSection() {
  return (
    <Section>
      <Stack
        alignItems="center"
        gap={16}
        height="screen"
        justifyContent="center"
      >
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 75 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Stack alignItems="center" justifyContent="center" textAlign="center">
            <Heading as="h1">Maurice Kleine</Heading>

            <Stack direction="horizontal" gap={1}>
              <Text
                color={400}
                serif
                size="2xl"
                tracking="tight"
                weight="semibold"
              >
                Freelance
              </Text>

              <Typewriter
                text={[
                  "Software",
                  "Frontend",
                  "Backend",
                  "Full-stack",
                  "Product",
                  "UX/UI",
                ]}
              />

              <Text
                color={400}
                serif
                size="2xl"
                tracking="tight"
                weight="semibold"
              >
                Engineer
              </Text>
            </Stack>
          </Stack>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ delay: 0.3, duration: 2, ease: "easeOut" }}
        >
          <Stack
            alignItems="center"
            direction="horizontal"
            gap={2}
            justifyContent="center"
          >
            <ContactFormDialog>
              <Button iconLeft={PaperPlaneTilt} variant="solid">
                Contact
              </Button>
            </ContactFormDialog>

            <Button
              as="a"
              href="https://www.linkedin.com/in/mauricekleine/"
              iconRight={ArrowUpRight}
            >
              LinkedIn
            </Button>
          </Stack>
        </motion.div>
      </Stack>
    </Section>
  );
}
