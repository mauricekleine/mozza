const path = require("node:path");

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

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
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, "src")],
    },
    transpilePackages: ["@mozza-icons/react", "@mozza-ui/react"],
  };
};
