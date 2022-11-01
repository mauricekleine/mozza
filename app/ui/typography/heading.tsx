import classNames from "classnames";
import type { ReactNode } from "react";

type HeadingElement = "h1" | "h2" | "h3";

type Props = {
  as?: HeadingElement;
  children: ReactNode;
};

export function Heading({ as = "h2", children }: Props) {
  const Element = as;

  return (
    <Element
      className={classNames("text-primary-800 dark:text-primary-100", {
        "text-lg sm:text-xl font-semibold leading-5 sm:tracking-tight mb-1":
          as === "h3",
        "text-2xl sm:text-3xl font-bold leading-7 sm:tracking-tight mb-2":
          as === "h2",
        "text-5xl sm:text-6xl font-black leading-10 sm:tracking-tight mb-4":
          as === "h1",
      })}
    >
      {children}
    </Element>
  );
}
