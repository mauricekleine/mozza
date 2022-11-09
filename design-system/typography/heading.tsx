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
        "text-lg font-semibold leading-normal text-slate-400 sm:text-xl sm:tracking-tight":
          as === "h4",
        "font-serif text-2xl font-bold leading-relaxed text-slate-300 sm:text-3xl sm:tracking-tight":
          as === "h3",
        "text-3xl font-extrabold sm:text-4xl sm:tracking-normal md:text-5xl":
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
