const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  /** @type {import('next').NextConfig} */
  return {
    compiler: {
      removeConsole: phase !== PHASE_DEVELOPMENT_SERVER,
    },
    experimental: {
      appDir: true,
      typedRoutes: true,
    },
    reactStrictMode: true,
    swcMinify: true,
  };
};
