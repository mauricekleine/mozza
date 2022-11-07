import classNames from "classnames";
import type { ReactNode } from "react";

type Element = "p" | "small" | "span";
type Weight = "normal" | "bold";

type Props = {
  as?: Element;
  children: ReactNode;
  weight?: Weight;
};

export function Text({ as = "span", children, weight }: Props) {
  const Element = as;

  return (
    <Element
      className={classNames({
        "text-xs font-semibold uppercase tracking-tighter text-slate-400 sm:text-sm":
          as === "small",
        "font-bold": weight === "bold",
      })}
    >
      {children}
    </Element>
  );
}
