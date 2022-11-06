import classNames from "classnames";
import type { ReactNode } from "react";

import { ResponsiveProp, toResponsiveObject } from "../responsive-utils";

type AlignItems = "center" | "none";
type Direction = "horizontal" | "vertical";
type Gap = 1 | 2 | 4 | 8 | 16 | 32;
type JustifyContent = "around" | "between" | "center" | "end";
type TextAlign = "center" | "left" | "right";

type Props = {
  alignItems?: AlignItems;
  children: ReactNode | ReactNode[];
  direction?: ResponsiveProp<Direction>;
  gap?: ResponsiveProp<Gap>;
  justifyContent?: JustifyContent;
  textAlign?: TextAlign;
  wrap?: boolean;
};

export function Stack({
  alignItems = "none",
  children,
  direction: directionProp = { base: "vertical" },
  gap: gapProp,
  justifyContent,
  textAlign,
  wrap,
}: Props) {
  const direction = toResponsiveObject(directionProp);
  const gap = gapProp ? toResponsiveObject(gapProp) : undefined;

  return (
    <div
      className={classNames("flex", {
        "flex-col": direction.base === "vertical",
        "sm:flex-col": direction.sm === "vertical",
        "md:flex-col": direction.md === "vertical",
        "lg:flex-col": direction.lg === "vertical",
        "flex-row": direction.base === "horizontal",
        "sm:flex-row": direction.sm === "horizontal",
        "md:flex-row": direction.md === "horizontal",
        "lg:flex-row": direction.lg === "horizontal",
        "gap-1": gap?.base === 1,
        "sm:gap-1": gap?.sm === 1,
        "md:gap-1": gap?.md === 1,
        "lg:gap-1": gap?.lg === 1,
        "gap-2": gap?.base === 2,
        "sm:gap-2": gap?.sm === 2,
        "md:gap-2": gap?.md === 2,
        "lg:gap-2": gap?.lg === 2,
        "gap-4": gap?.base === 4,
        "sm:gap-4": gap?.sm === 4,
        "md:gap-4": gap?.md === 4,
        "lg:gap-4": gap?.lg === 4,
        "gap-8": gap?.base === 8,
        "sm:gap-8": gap?.sm === 8,
        "md:gap-8": gap?.md === 8,
        "lg:gap-8": gap?.lg === 8,
        "gap-16": gap?.base === 16,
        "sm:gap-16": gap?.sm === 16,
        "md:gap-16": gap?.md === 16,
        "lg:gap-16": gap?.lg === 16,
        "gap-32": gap?.base === 32,
        "sm:gap-32": gap?.sm === 32,
        "md:gap-32": gap?.md === 32,
        "lg:gap-32": gap?.lg === 32,
        "flex-wrap": wrap === true,
        "items-center": alignItems === "center",
        "justify-around": justifyContent === "around",
        "justify-between": justifyContent === "between",
        "justify-center": justifyContent === "center",
        "justify-end": justifyContent === "end",
        "text-center": textAlign === "center",
        "text-left": textAlign === "left",
        "text-right": textAlign === "right",
      })}
    >
      {children}
    </div>
  );
}
