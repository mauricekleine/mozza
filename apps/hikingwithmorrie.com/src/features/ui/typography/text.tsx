import clsx from "clsx";
import { ReactNode } from "react";

import { Color, getTextColorClassName } from "../theme/color-utils";

export type TextSize = "base" | "sm";

type Props = {
  color?: Color;
  family?: "sans" | "serif";
  size?: TextSize;
  transform?: "none" | "uppercase" | "lowercase" | "capitalize";
} & (
  | {
      as?: "p";
      children: ReactNode;
    }
  | {
      as?: "span";
      children: string | string[];
    }
);

export function Text({
  as,
  children,
  color,
  family = "sans",
  size = "base",
  transform = "none",
}: Props) {
  const textColorClassName = getTextColorClassName(color);
  const className = clsx(textColorClassName, {
    capitalize: transform === "capitalize",
    "font-sans": family === "sans",
    "font-serif": family === "serif",
    lowercase: transform === "lowercase",
    "text-base": size === "base",
    "text-xs": size === "sm",
    uppercase: transform === "uppercase",
  });

  switch (as) {
    case "span": {
      return <span className={className}>{children}</span>;
    }

    default: {
      return <p className={className}>{children}</p>;
    }
  }
}
