import classNames from "classnames";
import type { ReactNode } from "react";

import { ResponsiveProp, toResponsiveObject } from "../responsive-utils";

type AlignItems = "center" | "none";
type Direction = "horizontal" | "vertical";
type Gap = 1 | 2 | 4 | 6 | 8 | 10 | 16 | 32;
type JustifyContent = "around" | "between" | "center" | "end";

type Props = {
  alignItems?: AlignItems;
  children: ReactNode | ReactNode[];
  direction?: ResponsiveProp<Direction>;
  gap?: Gap;
  justifyContent?: JustifyContent;
  wrap?: boolean;
};

export function Stack({
  alignItems = "none",
  children,
  direction: directionProp = { base: "vertical" },
  gap,
  justifyContent,
  wrap,
}: Props) {
  const direction = toResponsiveObject(directionProp);

  return (
    <div
      className={classNames("flex", {
        "flex-col": direction.base === "vertical",
        "sm:flex-col": direction.sm === "vertical",
        "md:flex-col": direction.md === "vertical",
        "lg:flex-col": direction.lg === "vertical",
        "xl:flex-col": direction.xl === "vertical",
        "flex-row": direction.base === "horizontal",
        "sm:flex-row": direction.sm === "horizontal",
        "md:flex-row": direction.md === "horizontal",
        "lg:flex-row": direction.lg === "horizontal",
        "xl:flex-row": direction.xl === "horizontal",
        "gap-1": gap === 1,
        "gap-2": gap === 2,
        "gap-4": gap === 4,
        "gap-6": gap === 6,
        "gap-8": gap === 8,
        "gap-10": gap === 10,
        "gap-16": gap === 16,
        "gap-32": gap === 32,
        "flex-wrap": wrap === true,
        "items-center": alignItems === "center",
        "justify-around": justifyContent === "around",
        "justify-between": justifyContent === "between",
        "justify-center": justifyContent === "center",
        "justify-end": justifyContent === "end",
      })}
    >
      {children}
    </div>
  );
}
