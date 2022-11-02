"use client";

import { motion } from "framer-motion";

import { Stack } from "~/ui/layout";
import { Heading, Tag, Text, Typewriter } from "~/ui/typography";

export function PageHeader() {
  return (
    <Stack gap={16}>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 75 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <Stack alignItems="center">
          <Heading as="h1">Maurice Kleine</Heading>

          <Heading>
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
        <Stack alignItems="center" gap={2} justifyContent="center">
          <Text as="p" size="xs">
            Talk to me about
          </Text>

          <Stack direction="orthogonal" gap={2} justifyContent="center">
            <Tag>📠 tech</Tag>

            <Tag>👨‍💻 javascript</Tag>

            <Tag>🧠 psychology</Tag>

            <Tag>🧘‍♂️ meditation</Tag>

            <Tag>🏃‍♂️ Running</Tag>

            <Tag>📚 Reading</Tag>

            <Tag>🙇‍♂️ philosophy</Tag>

            <Tag>🛸 the future</Tag>

            <Tag>🌯 mexican food</Tag>

            <Tag>🍻 craft beers</Tag>

            <Tag>🐰 bunnies</Tag>
          </Stack>
        </Stack>
      </motion.div>
    </Stack>
  );
}
