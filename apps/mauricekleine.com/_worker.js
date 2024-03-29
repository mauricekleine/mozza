import { z } from "zod";
import { zfd } from "zod-form-data";

const schema = zfd.formData({
  "cf-turnstile-response": zfd.text(),
  email: zfd.text(z.string().email()),
  inquiry: zfd.text(z.string().max(496).min(3)),
  phone: zfd.text(z.string().optional()),
});

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/contact") && request.method === "POST") {
      try {
        const body = await request.formData();
        const parsed = schema.parse(body);

        const idempotencyKey = crypto.randomUUID();
        const ip = request.headers.get("CF-Connecting-IP");
        const token = body.get("cf-turnstile-response");

        const formData = new FormData();
        formData.append("idempotency_key", idempotencyKey);
        formData.append("response", token);
        formData.append("remoteip", ip);
        formData.append("secret", env.TURNSTILE_SECRET_KEY);

        const response = await fetch(
          "https://challenges.cloudflare.com/turnstile/v0/siteverify",
          {
            body: formData,
            method: "POST",
          },
        );
        const json = await response.json();

        if (json.success) {
          await fetch(env.SLACK_WAITINGLIST_WEBHOOK_URL, {
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

          return new Response(null, {
            headers: {
              Location: "/?success=true",
            },
            status: 302,
          });
        }

        return new Response(null, {
          headers: {
            Location: "/?error=Invalid captcha",
          },
          status: 302,
        });
      } catch (e) {
        return new Response(null, {
          headers: {
            Location: `/?error=${
              typeof e?.message === "string"
                ? e.message
                : typeof e === "string"
                  ? e
                  : "Unknown error"
            }`,
          },
          status: 302,
        });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
