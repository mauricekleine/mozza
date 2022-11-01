const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    colors: {
      black: colors.black,
      primary: colors.slate,
      white: colors.white,
    },
  },
};
