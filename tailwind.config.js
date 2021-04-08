const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  mode: "jit",
  plugins: [require("@tailwindcss/typography")],
  purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "sans"],
      serif: ["Merriweather", "sans-serif"],
    },
    colors: {
      black: colors.black,
      primary: colors.blueGray,
      white: colors.white,
      yellow: colors.yellow,
    },
  },
};
