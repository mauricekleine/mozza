import classNames from "classnames";
import type { ReactNode } from "react";

import { serif as fontSerif } from "../fonts";

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
  as?: HeadingElement;
  children: ReactNode;
  serif?: boolean;
  size?: HeadingSize;
};

export function Text({ as = "span", children, serif, size }: Props) {
  const Element = as;

  return (
    <Element
      className={classNames({
        [fontSerif.className]: serif,
        "text-xs font-semibold uppercase tracking-tighter text-primary-400 sm:text-sm":
          size === "xs",
        "text-sm text-primary-800 sm:text-base": size === "sm",
        "text-base text-primary-800 sm:text-lg": size === "base",
        "text-lg text-primary-800 sm:text-xl": size === "lg",
        "text-xl: text-primary-800 sm:text-2xl": size === "xl",
        "text-2xl text-primary-800 sm:text-3xl": size === "2xl",
        "text-3xl text-primary-800 sm:text-4xl": size === "3xl",
        "text-4xl text-primary-800 sm:text-5xl": size === "4xl",
        "text-5xl text-primary-800 sm:text-6xl": size === "5xl",
      })}
    >
      {children}
    </Element>
  );
}
