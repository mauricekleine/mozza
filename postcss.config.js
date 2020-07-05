module.exports = {
  plugins: {
    autoprefixer: process.env.NODE_ENV === "production" ? {} : false,
    tailwindcss: {},
  },
};
