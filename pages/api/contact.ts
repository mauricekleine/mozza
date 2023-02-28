import type { NextRequest } from "next/server";
import { z } from "zod";

import { turnstile } from "~/lib";

export const config = {
  runtime: "edge",
};

export default async function handler(request: NextRequest) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ data: "Method not allowed" }), {
      status: 400,
    });
  }

  const formData = await request.formData();
  const headers = request.headers;

  const verification = await turnstile.verify(formData, headers);

  if (verification.success === false) {
    return new Response(JSON.stringify({ data: "Verification failed" }), {
      status: 400,
    });
  }

  const schema = z.object({
    email: z.string().email(),
    inquiry: z.string().max(496).min(3),
    phone: z.string(),
  });

  const result = schema.safeParse(Object.fromEntries(formData));

  if (result.success) {
    await fetch(process.env.SLACK_WAITINGLIST_WEBHOOK_URL as string, {
      body: JSON.stringify({
        blocks: [
          {
            type: "section",
            text: {
              type: "plain_text",
              text: `New inquiry from ${result.data.email}${
                result.data.phone ? ` (${result.data.phone})` : ""
              }`,
            },
          },
          {
            type: "divider",
          },
          {
            type: "section",
            text: {
              type: "plain_text",
              text: result.data.inquiry,
            },
          },
        ],
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    return new Response(JSON.stringify({ data: result.data }), {
      status: 200,
    });
  }

  return new Response(JSON.stringify({ data: result.error.format() }), {
    status: 400,
  });
}
