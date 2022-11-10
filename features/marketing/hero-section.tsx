"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Button,
  Heading,
  Section,
  Stack,
  Text,
  Typewriter,
} from "~/design-system";

import { ContactFormDialog } from "~/contact-form";

export function HeroSection() {
  return (
    <Section>
      <div className="my-16 sm:my-32">
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

              <Heading as="h3">
                <Stack direction="horizontal" gap={1}>
                  <Text>Freelance</Text>

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

                  <Text>Engineer</Text>
                </Stack>
              </Heading>
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
              <ContactFormDialog buttonVariant="solid" />

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
