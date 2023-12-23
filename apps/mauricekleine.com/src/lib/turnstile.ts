import { serverConfig } from "src/config/server";

export const turnstile = {
  verify: async function verify(
    data: { verificationToken: string },
    headers: Headers,
  ) {
    const token = data.verificationToken;
    const ip = headers.get("CF-Connecting-IP");

    if (!token) {
      return { success: false };
    }

    const formData = new FormData();
    formData.append("response", token);
    formData.append("secret", serverConfig.TURNSTILE_SECRET_KEY);

    if (ip) {
      formData.append("ip", ip);
    }

    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        body: formData,
        method: "POST",
      },
    );

    return (await result.json()) as { success: boolean };
  },
};
