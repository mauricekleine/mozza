import { ElementType, ReactNode } from "react";

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
  display: "grid";
  rows?: ResponsiveProp<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10>;
};

type Props = (FlexProps | GridProps) & {
  alignItems?: ResponsiveProp<"center" | "end" | "start">;
  as?: ElementType;
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
  width?: "sm" | "md" | "lg";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
};

export function Box({
  alignItems,
  as = "div",
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
  width,
  wrap,
  ...rest
}: Props) {
  const As = as;

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
      data-width={width}
      data-wrap={wrap ? transformResponsiveProp(wrap) : undefined}
      {...rest}
    >
      {children}
    </As>
  );
}

export type BoxProps = Props;
