import { clsxVariants } from "clsx-variants";

const textColorClassMap = {
  black: "text-black",
  green: "text-green-base",
  "green.dark": "text-green-dark",
  "green.light": "text-green-light",
  grey: "text-grey-base",
  "grey.dark": "text-grey-dark",
  "grey.light": "text-grey-light",
  red: "text-red",
  white: "text-white",
} as const;

type Color = keyof typeof textColorClassMap;
type TextColorClass = (typeof textColorClassMap)[Color];

const variants = clsxVariants<{
  color: { [key in Color]: TextColorClass };
}>({
  variants: {
    color: textColorClassMap,
  },
});

export function textColorVariants({
  color,
}: {
  color?: Color;
}): TextColorClass {
  return variants({ color });
}

export type { Color };
