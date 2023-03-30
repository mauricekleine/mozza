"use client";

import { Stack } from "@mozza-ui/react";
import { motion } from "framer-motion";

import { ContactFormDialog } from "~/contact-form";
import { Button, Heading, Section, Text, Typewriter } from "~/ui";
import { PaperPlaneTilt } from "~/ui/icon";

export function HeroSection() {
  return (
    <Section>
      <Stack gap={16} height="screen" items="center" justify="center">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 75 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Stack items="center" justify="center" textAlign="center">
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
          <Stack direction="horizontal" gap={2} items="center" justify="center">
            <ContactFormDialog>
              <Button iconLeft={PaperPlaneTilt} variant="primary">
                Contact
              </Button>
            </ContactFormDialog>

            <Button as="a" href="https://www.linkedin.com/in/mauricekleine/">
              LinkedIn
            </Button>
          </Stack>
        </motion.div>
      </Stack>
    </Section>
  );
}
