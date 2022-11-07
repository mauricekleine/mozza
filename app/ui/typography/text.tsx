import classNames from "classnames";
import type { ReactNode } from "react";

type Element = "p" | "span";
type Size = "xs" | "base";
type Weight = "normal" | "bold";

type Props = {
  as?: Element;
  children: ReactNode;
  size?: Size;
  weight?: Weight;
};

export function Text({ as = "span", children, size, weight }: Props) {
  const Element = as;

  return (
    <Element
      className={classNames({
        "text-xs font-semibold uppercase tracking-tighter text-slate-400 sm:text-sm":
          size === "xs",
        "font-bold": weight === "bold",
      })}
    >
      {children}
    </Element>
  );
}
