"use client";

import { motion } from "framer-motion";

import {
  Button,
  Heading,
  Section,
  Stack,
  Text,
  Typewriter,
} from "~/design-system";
import { ArrowUpRight, PaperPlaneTilt } from "~/design-system/icon";

import { ContactFormDialog } from "~/contact-form";

export function HeroSection() {
  return (
    <Section>
      <div className="mt-16 sm:mt-32">
        <Stack gap={16}>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 75 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
          >
            <Stack
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <Heading as="h1">Maurice Kleine</Heading>

              <Stack direction="horizontal" gap={1}>
                <Text color={300} serif size="2xl" weight="bold">
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

                <Text color={300} serif size="2xl" weight="bold">
                  Engineer
                </Text>
              </Stack>
            </Stack>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ delay: 0.3, ease: "easeOut", duration: 2 }}
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
      </div>
    </Section>
  );
}
