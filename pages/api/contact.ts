import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { todoist, turnstile } from "~/lib";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== "POST") {
    return response.status(400).json({ data: "Method not allowed" });
  }

  const verification = await turnstile.verify(request);

  if (verification.success === false) {
    return response.status(400).json({ data: "Verification failed" });
  }

  const schema = z.object({
    email: z.string().email(),
    inquiry: z.string().max(496).min(3),
    phone: z.string(),
  });

  const result = schema.safeParse(request.body);

  if (result.success) {
    await todoist.addTask({
      content: `New inquiry from ${result.data.email}`,
      description: `**Inquiry**: ${result.data.inquiry}\n**Email**: ${result.data.email}\n**Phone**: ${result.data.phone}`,
      dueString: "in 181 minutes", // 3 hours + 1 minute to trigger notifications
      priority: 4,
    });

    return response.status(200).json({ data: result.data });
  }

  return response.status(400).json({ error: result.error.format() });
}
