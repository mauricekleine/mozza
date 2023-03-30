import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/icons/src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
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
} satisfies Config;
