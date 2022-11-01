import classNames from "classnames";
import type { ReactNode } from "react";

type HeadingElement = "p" | "span";
type HeadingSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl";

type Props = {
  as: HeadingElement;
  children: ReactNode;
  size: HeadingSize;
};

export function Text({ as = "p", children, size = "base" }: Props) {
  const Element = as;

  return (
    <Element
      className={classNames(
        "mb-1 font-bold text-primary-800 dark:text-primary-100 sm:mb-2 sm:text-3xl",
        {
          "text-xs sm:text-sm": size === "xs",
          "text-sm sm:text-base": size === "sm",
          "text-base sm:text-lg": size === "base",
          "text-lg sm:text-xl": size === "lg",
          "text-xl: sm:text-2xl": size === "xl",
          "text-2xl sm:text-3xl": size === "2xl",
          "text-3xl sm:text-4xl": size === "3xl",
          "text-4xl sm:text-5xl": size === "4xl",
          "text-5xl sm:text-6xl": size === "5xl",
        }
      )}
    >
      {children}
    </Element>
  );
}
