const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
  theme: {
    colors: {
      black: colors.black,
      primary: colors.slate,
      white: colors.white,
    },
    extend: {
      fontFamily: {
        sans: ["Fira Sans", "sans"],
        serif: ["Merriweather", "sans-serif"],
      },
    },
  },
};
