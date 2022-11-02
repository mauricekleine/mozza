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
        [fontSerif]: serif,
        "text-xs font-semibold sm:text-sm uppercase text-primary-500 dark:text-primary-400 tracking-tighter":
          size === "xs",
        "text-sm sm:text-base text-primary-800": size === "sm",
        "text-base sm:text-lg text-primary-800": size === "base",
        "text-lg sm:text-xl text-primary-800": size === "lg",
        "text-xl: sm:text-2xl text-primary-800": size === "xl",
        "text-2xl sm:text-3xl text-primary-800": size === "2xl",
        "text-3xl sm:text-4xl text-primary-800": size === "3xl",
        "text-4xl sm:text-5xl text-primary-800": size === "4xl",
        "text-5xl sm:text-6xl text-primary-800": size === "5xl",
      })}
    >
      {children}
    </Element>
  );
}
