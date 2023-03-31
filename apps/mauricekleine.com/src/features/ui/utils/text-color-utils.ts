import { clsxVariants } from "clsx-variants";

export const textColorClassMap = {
  0: "text-white",
  50: "text-slate-50",
  100: "text-slate-100",
  200: "text-slate-200",
  300: "text-slate-300",
  400: "text-slate-400",
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
