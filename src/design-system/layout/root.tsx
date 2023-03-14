import { clsx } from "clsx";
import type { ReactNode } from "react";

import { ResponsiveProp, toResponsiveObject } from "../responsive-utils";

type AlignItems = "center" | "end" | "start";
type Gap = 1 | 2 | 4 | 8 | 16 | 32 | 64;
type JustifyContent =
  | "around"
  | "between"
  | "center"
  | "end"
  | "evenly"
  | "start";
type JustifyItems = "center" | "end" | "start";
type TextAlign = "center" | "left" | "right";

export type RootProps = {
  alignItems?: AlignItems;
  children: ReactNode | ReactNode[];
  className: string;
  gap?: ResponsiveProp<Gap>;
  justifyContent?: JustifyContent;
  justifyItems?: JustifyItems;
  textAlign?: TextAlign;
};

export function Root({
  alignItems,
  children,
  className,
  gap: gapProp,
  justifyContent,
  justifyItems,
  textAlign,
}: RootProps) {
  const gap = gapProp ? toResponsiveObject(gapProp) : undefined;

  return (
    <div
      className={clsx(className, {
        "gap-1": gap?.base === 1,
        "gap-2": gap?.base === 2,
        "gap-4": gap?.base === 4,
        "gap-8": gap?.base === 8,
        "gap-16": gap?.base === 16,
        "gap-32": gap?.base === 32,
        "gap-64": gap?.base === 64,
        "items-center": alignItems === "center",
        "items-end": alignItems === "end",
        "items-start": alignItems === "start",
        "justify-around": justifyContent === "around",
        "justify-between": justifyContent === "between",
        "justify-center": justifyContent === "center",
        "justify-end": justifyContent === "end",
        "justify-evenly": justifyContent === "evenly",
        "justify-items-center": justifyItems === "center",
        "justify-items-end": justifyItems === "end",
        "justify-items-start": justifyItems === "start",
        "justify-start": justifyContent === "start",
        "lg:gap-1": gap?.lg === 1,
        "lg:gap-2": gap?.lg === 2,
        "lg:gap-4": gap?.lg === 4,
        "lg:gap-8": gap?.lg === 8,
        "lg:gap-16": gap?.lg === 16,
        "lg:gap-32": gap?.lg === 32,
        "lg:gap-64": gap?.lg === 64,
        "md:gap-1": gap?.md === 1,
        "md:gap-2": gap?.md === 2,
        "md:gap-4": gap?.md === 4,
        "md:gap-8": gap?.md === 8,
        "md:gap-16": gap?.md === 16,
        "md:gap-32": gap?.md === 32,
        "md:gap-64": gap?.md === 64,
        "sm:gap-1": gap?.sm === 1,
        "sm:gap-2": gap?.sm === 2,
        "sm:gap-4": gap?.sm === 4,
        "sm:gap-8": gap?.sm === 8,
        "sm:gap-16": gap?.sm === 16,
        "sm:gap-32": gap?.sm === 32,
        "sm:gap-64": gap?.sm === 64,
        "text-center": textAlign === "center",
        "text-left": textAlign === "left",
        "text-right": textAlign === "right",
      })}
    >
      {children}
    </div>
  );
}
