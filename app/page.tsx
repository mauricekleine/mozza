"use client";

import { motion } from "framer-motion";

import { Stack } from "~/design-system";

import {
  HeroSection,
  IntroSection,
  PastProjectsSection,
  PetProjectsSection,
  ServicesSection,
} from "~/marketing";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <Stack gap={{ base: 64 }}>
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PastProjectsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 75 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ServicesSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 75 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <IntroSection />
        </motion.div>

        <PetProjectsSection />
      </Stack>
    </>
  );
}
