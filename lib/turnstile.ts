import { NextApiRequest, NextApiResponse } from "next";
import invariant from "tiny-invariant";

invariant(
  process.env.TURNSTILE_SECRET_KEY,
  "TURNSTILE_SECRET_KEY env var not set"
);

export const turnstile = {
  verify: async function (request: NextApiRequest) {
    const token = request.body["cf-turnstile-token"];

    if (!token) {
      return { success: false };
    }

    const data = new URLSearchParams();
    data.append("response", token);
    data.append("secret", process.env.TURNSTILE_SECRET_KEY as string);

    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        body: data,
        method: "POST",
      }
    );

    return (await result.json()) as { success: boolean };
  },
};
