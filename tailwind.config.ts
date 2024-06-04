import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "clip-path": (value) => ({
            clipPath: value,
          }),
        },
        { values: theme("clipPath") },
      );

      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
  theme: {
    extend: {
      boxShadow: ({ theme }) => ({
        brutal: `4px 4px 0px ${theme("colors.gray.800")}`,
        ["brutal-2xl"]: `16px 16px 0px ${theme("colors.gray.800")}`,
        ["brutal-lg"]: `6px 6px 0px ${theme("colors.gray.800")}`,
        ["brutal-sm"]: `3px 3px 0px ${theme("colors.gray.800")}`,
        ["brutal-xl"]: `8px 8px 0px ${theme("colors.gray.800")}`,
        ["brutal-xs"]: `1px 1px 0px ${theme("colors.gray.800")}`,
      }),
      clipPath: {
        starburst:
          "polygon(100% 50%,calc(99.76% - 7.96px) calc(54.9% - 0.78px),99.04% 59.75%,calc(97.85% - 7.66px) calc(64.51% - 2.32px),96.19% 69.13%,calc(94.1% - 7.06px) calc(73.57% - 3.77px),91.57% 77.78%,calc(88.65% - 6.18px) calc(81.72% - 5.08px),85.36% 85.36%,calc(81.72% - 5.08px) calc(88.65% - 6.18px),77.78% 91.57%,calc(73.57% - 3.77px) calc(94.1% - 7.06px),69.13% 96.19%,calc(64.51% - 2.32px) calc(97.85% - 7.66px),59.75% 99.04%,calc(54.9% - 0.78px) calc(99.76% - 7.96px),50% 100%,calc(45.1% - -0.78px) calc(99.76% - 7.96px),40.25% 99.04%,calc(35.49% - -2.32px) calc(97.85% - 7.66px),30.87% 96.19%,calc(26.43% - -3.77px) calc(94.1% - 7.06px),22.22% 91.57%,calc(18.28% - -5.08px) calc(88.65% - 6.18px),14.64% 85.36%,calc(11.35% - -6.18px) calc(81.72% - 5.08px),8.43% 77.78%,calc(5.9% - -7.06px) calc(73.57% - 3.77px),3.81% 69.13%,calc(2.15% - -7.66px) calc(64.51% - 2.32px),0.96% 59.75%,calc(0.24% - -7.96px) calc(54.9% - 0.78px),0% 50%,calc(0.24% - -7.96px) calc(45.1% - -0.78px),0.96% 40.25%,calc(2.15% - -7.66px) calc(35.49% - -2.32px),3.81% 30.87%,calc(5.9% - -7.06px) calc(26.43% - -3.77px),8.43% 22.22%,calc(11.35% - -6.18px) calc(18.28% - -5.08px),14.64% 14.64%,calc(18.28% - -5.08px) calc(11.35% - -6.18px),22.22% 8.43%,calc(26.43% - -3.77px) calc(5.9% - -7.06px),30.87% 3.81%,calc(35.49% - -2.32px) calc(2.15% - -7.66px),40.25% 0.96%,calc(45.1% - -0.78px) calc(0.24% - -7.96px),50% 0%,calc(54.9% - 0.78px) calc(0.24% - -7.96px),59.75% 0.96%,calc(64.51% - 2.32px) calc(2.15% - -7.66px),69.13% 3.81%,calc(73.57% - 3.77px) calc(5.9% - -7.06px),77.78% 8.43%,calc(81.72% - 5.08px) calc(11.35% - -6.18px),85.36% 14.64%,calc(88.65% - 6.18px) calc(18.28% - -5.08px),91.57% 22.22%,calc(94.1% - 7.06px) calc(26.43% - -3.77px),96.19% 30.87%,calc(97.85% - 7.66px) calc(35.49% - -2.32px),99.04% 40.25%,calc(99.76% - 7.96px) calc(45.1% - -0.78px))",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      // @ts-expect-error textShadow is not defined in the default theme
      textShadow: ({ theme }) => ({
        DEFAULT: `2px 2px 0px ${theme("colors.gray.800")}`,
        lg: `3px 3px 0px ${theme("colors.gray.800")}`,
        sm: `1px 1px 0px ${theme("colors.gray.800")}`,
      }),
    },
  },
};
export default config;
