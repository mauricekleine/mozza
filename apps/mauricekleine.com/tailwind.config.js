const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s steps(2) infinite",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        serif: ["var(--font-serif)", ...fontFamily.serif],
      },
      keyframes: {
        blink: {
          "0%": { opacity: "0" },
        },
      },
    },
  },
};
