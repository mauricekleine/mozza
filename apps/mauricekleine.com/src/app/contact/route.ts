import { NextResponse } from "next/server";
import { z } from "zod";

import { serverConfig } from "~/config/server";
import { turnstile } from "~/lib";

export async function POST(request: Request) {
  const formData = await request.formData();
  const headers = request.headers;

  const verification = await turnstile.verify(formData, headers);

  if (verification.success === false) {
    return NextResponse.json(
      { data: "Verification failed" },
      {
        status: 400,
      }
    );
  }

  const schema = z.object({
    email: z.string().email(),
    inquiry: z.string().max(496).min(3),
    phone: z.string(),
  });

  try {
    const parsed = schema.parse(Object.fromEntries(formData));

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

    return NextResponse.json({ data: parsed });
  } catch (error) {
    return NextResponse.json(
      { error },
      {
        status: 400,
      }
    );
  }
}
