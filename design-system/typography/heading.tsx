import classNames from "classnames";
import { ReactNode, forwardRef } from "react";

type HeadingElement = "h1" | "h2" | "h3" | "h4";

type Props = {
  as: HeadingElement;
  children: ReactNode;
  id?: string;
};

export const Heading = forwardRef<HTMLHeadingElement, Props>(function Heading(
  { as, children, ...props },
  ref
) {
  const Element = as;

  return (
    <Element
      className={classNames({
        "font-serif text-2xl font-medium tracking-tighter text-slate-100 sm:text-3xl":
          as === "h3",
        "font-serif text-4xl font-extrabold tracking-tight text-slate-100 sm:text-5xl":
          as === "h2",
        "bg-gradient-to-b from-slate-50 to-slate-400 bg-clip-text text-6xl font-black text-transparent sm:tracking-tight md:text-7xl":
          as === "h1",
      })}
      ref={ref}
      {...props}
    >
      {children}
    </Element>
  );
});
