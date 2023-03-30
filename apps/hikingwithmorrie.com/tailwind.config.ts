import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/icons/src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  theme: {
    colors: {
      black: colors.stone[900],
      green: {
        base: colors.emerald[500],
        dark: colors.emerald[800],
        light: colors.emerald[200],
      },
      grey: {
        base: colors.stone[500],
        dark: colors.stone[800],
        light: colors.stone[200],
      },
      red: colors.red[500],
      transparent: colors.transparent,
      white: colors.stone[50],
    },
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
} satisfies Config;
