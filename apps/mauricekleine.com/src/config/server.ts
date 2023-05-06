import { z } from "zod";

const configSchema = z.object({
  SLACK_WAITINGLIST_WEBHOOK_URL: z
    .string()
    .url()
    .startsWith("https://hooks.slack.com/services/"),
  TURNSTILE_SECRET_KEY: z.string().min(24),
});

const result = configSchema.safeParse({
  SLACK_WAITINGLIST_WEBHOOK_URL: process.env.SLACK_WAITINGLIST_WEBHOOK_URL,
  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
});

if (!result.success) {
  throw new Error("Invalid environment configuration");
}

export const serverConfig = result.data;
