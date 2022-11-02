import classNames from "classnames";
import type { ReactNode } from "react";

import { serif } from "../fonts";

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
        [`${serif} text-2xl sm:text-3xl font-bold leading-relaxed sm:tracking-tight text-primary-700 dark:text-primary-300`]:
          as === "h2",
        "text-5xl sm:text-6xl md:text-7xl font-black sm:tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-primary-600 to-primary-800 dark:from-white dark:to-primary-300":
          as === "h1",
      })}
    >
      {children}
    </Element>
  );
}
