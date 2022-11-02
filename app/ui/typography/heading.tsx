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
        "text-lg font-semibold leading-normal text-primary-300 sm:text-xl sm:tracking-tight":
          as === "h3",
        [`${serif.className} text-2xl font-bold leading-relaxed text-primary-300 sm:text-3xl sm:tracking-tight`]:
          as === "h2",
        "bg-gradient-to-b from-white to-primary-300 bg-clip-text text-5xl font-black text-transparent sm:text-6xl sm:tracking-tight md:text-7xl":
          as === "h1",
      })}
    >
      {children}
    </Element>
  );
}
