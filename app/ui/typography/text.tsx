import classNames from "classnames";
import { ForwardedRef, ReactNode, forwardRef } from "react";

type Element = "p" | "span";
type Weight = "normal" | "bold";

type Props = {
  as?: Element;
  children: ReactNode;
  id?: string;
  weight?: Weight;
};

export const Text = forwardRef<HTMLParagraphElement | HTMLSpanElement, Props>(
  function Text({ as = "span", children, weight, ...props }, ref) {
    const className = classNames({
      "font-bold": weight === "bold",
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
