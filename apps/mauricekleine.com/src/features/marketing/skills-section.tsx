"use client";

import { JSFile, TSFile, TSXFile } from "@mozza-icons/react";
import { Stack, Tooltip, TooltipProvider } from "@mozza-ui/react";
import { motion } from "framer-motion";

import { Header, Section } from "~/ui";

const skills = [
  {
    icon: JSFile,
    title: "JavaScript",
  },
  {
    icon: TSFile,
    title: "TypeScript",
  },
  {
    icon: TSXFile,
    title: "React",
  },
];

export function SkillsSection() {
  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Section>
          <Stack gap={8} justify="center">
            <Stack textAlign="center">
              <Header as="h2">Skills</Header>
            </Stack>

            <Stack direction="horizontal" gap={4} justify="center">
              {[...skills, ...skills, ...skills].map((skill) => {
                const Icon = skill.icon;

                return (
                  <Stack items="center" justify="center" key={skill.title}>
                    <Tooltip
                      className="rounded-lg border border-slate-800 px-4 py-2 drop-shadow-lg"
                      content={skill.title}
                    >
                      <Icon className="h-10 w-10" />
                    </Tooltip>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </Section>
      </motion.div>
    </TooltipProvider>
  );
}
