import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import {
  ResponsiveProp,
  transformResponsiveProp,
} from "~/ui/utils/responsive-utils";

import styles from "./box.module.scss";

type FlexProps = {
  columns?: never;
  display?: "flex";
  rows?: never;
};

type GridProps = {
  columns?: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10>;
  display?: "grid";
  rows?: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10>;
};

type BoxProps<As extends ElementType = "div"> = (FlexProps | GridProps) & {
  alignItems?: ResponsiveProp<"center" | "end" | "start">;
  as?: As;
  children: ReactNode;
  className?: string;
  direction?: ResponsiveProp<"horizontal" | "vertical">;
  gap?: ResponsiveProp<1 | 2 | 4 | 8 | 12 | 16 | 32 | 64>;
  height?: ResponsiveProp<"full" | "screen">;
  justifyContent?: ResponsiveProp<
    "around" | "between" | "center" | "end" | "evenly" | "start"
  >;
  overflow?: ResponsiveProp<"auto" | "hidden" | "scroll" | "visible">;
  textAlign?: ResponsiveProp<"center" | "left" | "right">;
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
};

type Props<As extends ElementType = "div"> = BoxProps<As> &
  Omit<ComponentPropsWithoutRef<As>, keyof BoxProps<As>>;

export function Box<As extends ElementType = "div">({
  alignItems,
  as,
  children,
  className,
  columns,
  direction = "vertical",
  display = "flex",
  gap,
  height,
  justifyContent,
  overflow,
  rows,
  textAlign,
  wrap,
  ...rest
}: Props<As>) {
  const As = as ?? "div";

  return (
    <As
      className={className ? `${styles.box} ${className}` : styles.box}
      data-align-items={
        alignItems ? transformResponsiveProp(alignItems) : undefined
      }
      data-columns={columns ? transformResponsiveProp(columns) : undefined}
      data-direction={
        direction ? transformResponsiveProp(direction) : undefined
      }
      data-display={display ? transformResponsiveProp(display) : undefined}
      data-gap={gap ? transformResponsiveProp(gap) : undefined}
      data-height={height ? transformResponsiveProp(height) : undefined}
      data-justify-content={
        justifyContent ? transformResponsiveProp(justifyContent) : undefined
      }
      data-overflow={overflow ? transformResponsiveProp(overflow) : undefined}
      data-rows={rows ? transformResponsiveProp(rows) : undefined}
      data-text-align={
        textAlign ? transformResponsiveProp(textAlign) : undefined
      }
      data-wrap={wrap ? transformResponsiveProp(wrap) : undefined}
      {...rest}
    >
      {children}
    </As>
  );
}

export type { Props as BoxProps };
