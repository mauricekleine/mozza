import classNames from "classnames";
import { ForwardedRef, ReactNode, forwardRef } from "react";

type Element = "p" | "span";
type Weight = "normal" | "semibold" | "bold";

type Props = {
  as?: Element;
  children: ReactNode;
  color?: 0 | 50 | 100 | 200 | 300 | 400;
  id?: string;
  serif?: boolean;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  weight?: Weight;
};

export const Text = forwardRef<HTMLParagraphElement | HTMLSpanElement, Props>(
  function Text(
    {
      as = "span",
      children,
      color = 200,
      weight,
      serif = false,
      size,
      ...props
    },
    ref
  ) {
    const className = classNames({
      "font-normal": weight === "normal",
      "font-semibold": weight === "semibold",
      "font-bold": weight === "bold",
      "font-serif": serif,
      "text-xs": size === "xs",
      "text-sm": size === "sm",
      "text-base": size === "base",
      "text-lg sm:text-xl": size === "lg",
      "text-xl sm:text-2xl": size === "xl",
      "text-2xl sm:text-3xl tracking-tight": size === "2xl",
      "text-white": color === 0,
      "text-slate-50": color === 50,
      "text-slate-100": color === 100,
      "text-slate-200": color === 200,
      "text-slate-300": color === 300,
      "text-slate-400": color === 400,
    });

    if (as === "p") {
      return (
        <p
          className={className}
          ref={ref as ForwardedRef<HTMLParagraphElement>}
          {...props}
        >
          {children}
        </p>
      );
    }

    return (
      <span
        className={className}
        ref={ref as ForwardedRef<HTMLSpanElement>}
        {...props}
      >
        {children}
      </span>
    );
  }
);
