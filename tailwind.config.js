const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
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
    },
  },
};
