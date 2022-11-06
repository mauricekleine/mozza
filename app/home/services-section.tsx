"use client";

import { Package } from "phosphor-react";

import { Grid, Section, Stack } from "~/ui/layout";
import { Heading } from "~/ui/typography";

export function ServicesSection() {
  return (
    <Section size="lg">
      <Stack gap={8} justifyContent="center" textAlign="center">
        <Heading as="h2">My services</Heading>

        <Grid
          columns={{ base: 1, sm: 2, md: 3 }}
          gap={4}
          rows={{ base: 9, sm: 5, md: 3 }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              className="rounded-lg border border-white/10 bg-gradient-to-br from-white/10 via-black to-black px-8 py-8 text-left"
              key={i}
            >
              <Stack gap={2}>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40">
                  <Package className="h-8 w-8" />
                </div>

                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum aliquid dolores explicabo ratione fugit recusandae.
                </div>
              </Stack>
            </div>
          ))}
        </Grid>
      </Stack>
    </Section>
  );
}
