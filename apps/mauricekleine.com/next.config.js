const path = require("node:path");

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const ContentSecurityPolicy = `
  default-src 'self';
  frame-ancestors 'none';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' challenges.cloudflare.com *.vercel-scripts.com vitals.vercel-insights.com;
  style-src 'self' 'unsafe-inline';
`
  .replaceAll(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  {
    key: "Permissions-Policy",
    value: "camera=(), geolocation=(), microphone=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Referrer-Policy", value: "origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

module.exports = (phase) => {
  /** @type {import('next').NextConfig} */
  return {
    compiler: {
      removeConsole: phase !== PHASE_DEVELOPMENT_SERVER,
    },
    experimental: {
      serverActions: true,
      typedRoutes: true,
    },
    headers() {
      return [{ headers: securityHeaders, source: "/(.*)" }];
    },
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, "src")],
    },
    transpilePackages: ["@mozza-icons/react", "@mozza-ui/react"],
  };
};
