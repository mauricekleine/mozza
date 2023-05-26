import { z } from "zod";

const configSchema = z.object({
  BEEHIIV_API_KEY: z.string().length(64),
  BEEHIIV_PUBLICATION_ID: z.string().length(40),
});

const result = configSchema.safeParse({
  BEEHIIV_API_KEY: process.env.BEEHIIV_API_KEY,
  BEEHIIV_PUBLICATION_ID: process.env.BEEHIIV_PUBLICATION_ID,
});

if (!result.success) {
  throw new Error("Invalid environment configuration");
}

export const serverConfig = result.data;
