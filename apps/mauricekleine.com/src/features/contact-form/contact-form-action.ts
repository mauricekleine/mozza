"use server";

import { z } from "zod";
import { zfd } from "zod-form-data";

import { serverConfig } from "~/config/server";
import { turnstile } from "~/lib/turnstile";

export async function submitContactForm(data: FormData) {
  "use server";

  const schema = zfd.formData({
    "cf-turnstile-response": zfd.text(),
    email: zfd.text(z.string().email()),
    inquiry: zfd.text(z.string().max(496).min(3)),
    phone: zfd.text(z.string().optional()),
  });

  try {
    const parsed = schema.parse(data);
    const verification = await turnstile.verify(
      { verificationToken: parsed["cf-turnstile-response"] },
      new Headers()
    );

    if (verification.success === false) {
      return { data: "Verification failed", status: 400 };
    }

    await fetch(serverConfig.SLACK_WAITINGLIST_WEBHOOK_URL, {
      body: JSON.stringify({
        blocks: [
          {
            text: {
              text: `New inquiry from ${parsed.email}${
                parsed.phone ? ` (${parsed.phone})` : ""
              }`,
              type: "plain_text",
            },
            type: "section",
          },
          {
            type: "divider",
          },
          {
            text: {
              text: parsed.inquiry,
              type: "plain_text",
            },
            type: "section",
          },
        ],
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    return { data: parsed, status: 200 };
  } catch {
    return {
      data: "Invalid form data",
      status: 400,
    };
  }
}
