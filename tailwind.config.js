const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        serif: ["Piazzolla", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: "1.5rem",
        "3xl": "2rem",
        "5xl": "4rem",
        "6xl": "6rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
