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
      className={classNames({
        "text-lg sm:text-xl font-semibold leading-normal sm:tracking-tight text-primary-600 dark:text-primary-300":
          as === "h3",
        "text-2xl sm:text-3xl font-bold leading-relaxed sm:tracking-tight text-primary-700 dark:text-primary-300":
          as === "h2",
        "text-5xl sm:text-6xl md:text-7xl font-black sm:tracking-tight text-primary-800 dark:text-primary-50":
          as === "h1",
      })}
    >
      {children}
    </Element>
  );
}
