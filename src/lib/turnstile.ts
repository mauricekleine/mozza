import { serverConfig } from "@mk/config/server";

export const turnstile = {
  verify: async function verify(formData: FormData, headers: Headers) {
    const token = formData.get("cf-turnstile-response");
    const ip = headers.get("CF-Connecting-IP");

    if (!token) {
      return { success: false };
    }

    const data = new FormData();
    data.append("response", token);
    data.append("secret", serverConfig.TURNSTILE_SECRET_KEY);

    if (ip) {
      data.append("ip", ip);
    }

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
