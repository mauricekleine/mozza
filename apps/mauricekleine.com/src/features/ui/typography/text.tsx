import { clsx } from "clsx";
import { ForwardedRef, ReactNode, forwardRef } from "react";

type Props = {
  as?: "p" | "span";
  children: ReactNode;
  color?: 0 | 50 | 100 | 200 | 300 | 400;
  id?: string;
  serif?: boolean;
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  tracking?: "tighter" | "tight" | "normal";
  weight?: "normal" | "semibold" | "bold";
};

export const Text = forwardRef<HTMLParagraphElement | HTMLSpanElement, Props>(
  function Text(
    {
      as = "span",
      children,
      color = 200,
      serif = false,
      size = "base",
      tracking = "normal",
      weight = "normal",
      ...props
    },
    ref
  ) {
    const className = clsx({
      "font-bold": weight === "bold",
      "font-normal": weight === "normal",
      "font-semibold": weight === "semibold",
      "font-serif": serif,
      "text-2xl sm:text-3xl tracking-tight": size === "2xl",
      "text-base": size === "base",
      "text-lg sm:text-xl": size === "lg",
      "text-slate-50": color === 50,
      "text-slate-100": color === 100,
      "text-slate-200": color === 200,
      "text-slate-300": color === 300,
      "text-slate-400": color === 400,
      "text-sm": size === "sm",
      "text-white": color === 0,
      "text-xl sm:text-2xl": size === "xl",
      "text-xs": size === "xs",
      "tracking-normal": tracking === "normal",
      "tracking-tight": tracking === "tight",
      "tracking-tighter": tracking === "tighter",
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
