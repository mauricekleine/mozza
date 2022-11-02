const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      black: colors.black,
      primary: colors.slate,
      transparent: colors.transparent,
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
