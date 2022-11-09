import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { todoist } from "~/lib/todoist";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ data: "Method not allowed" });
  }

  const schema = z.object({
    email: z.string().email(),
    inquiry: z.string().max(496).min(3),
    phone: z.string(),
  });

  const result = schema.safeParse(req.body);

  if (result.success) {
    await todoist.addTask({
      content: `New inquiry from ${result.data.email}`,
      description: `**Inquiry**: ${result.data.inquiry}\n**Email**: ${result.data.email}\n**Phone**: ${result.data.phone}`,
      dueString: "in 181 minutes", // 3 hours + 1 minute to trigger notifications
      priority: 4,
    });

    return res.status(200).json({ data: result.data });
  }

  return res.status(400).json({ error: result.error.format() });
}
