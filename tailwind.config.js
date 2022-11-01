const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      black: colors.black,
      primary: colors.slate,
      white: colors.white,
    },
    extend: {
      animation: {
        blink: "blink 1s steps(2) infinite",
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0" },
        },
      },
    },
  },
};
