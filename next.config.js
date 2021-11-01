module.exports = {
  eslint: {
    dirs: ["src"],
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
