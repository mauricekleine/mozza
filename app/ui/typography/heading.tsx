import classNames from "classnames";
import type { ReactNode } from "react";

import { serif } from "../fonts";

type HeadingElement = "h1" | "h2" | "h3" | "h4";

type Props = {
  as: HeadingElement;
  children: ReactNode;
};

export function Heading({ as, children }: Props) {
  const Element = as;

  return (
    <Element
      className={classNames({
        [serif.className]: as === "h3",
        "text-lg font-semibold leading-normal text-slate-300 sm:text-xl sm:tracking-tight":
          as === "h4",
        "text-2xl font-bold leading-relaxed text-slate-300 sm:text-3xl sm:tracking-tight":
          as === "h3",
        "text-3xl font-extrabold sm:text-4xl sm:tracking-normal md:text-5xl":
          as === "h2",
        "bg-gradient-to-b from-white to-slate-400 bg-clip-text text-5xl font-black text-transparent sm:text-6xl sm:tracking-tight md:text-7xl":
          as === "h1",
      })}
    >
      {children}
    </Element>
  );
}
