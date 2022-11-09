import type { NextRequest } from "next/server";
import { z } from "zod";

import { todoist, turnstile } from "~/lib";

export const config = {
  runtime: "experimental-edge",
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
    await todoist.createTask({
      content: `New inquiry from ${result.data.email}`,
      description: `**Inquiry**: ${result.data.inquiry}\n**Email**: ${result.data.email}\n**Phone**: ${result.data.phone}`,
      dueString: "in 181 minutes", // 3 hours + 1 minute to trigger notifications
      priority: 4,
    });

    return new Response(JSON.stringify({ data: result.data }), {
      status: 200,
    });
  }

  return new Response(JSON.stringify({ data: result.error.format() }), {
    status: 400,
  });
}
