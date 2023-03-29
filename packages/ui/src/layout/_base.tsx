import { clsx } from "clsx";
import { ReactNode } from "react";

import { ResponsiveProp, toResponsiveObject } from "../utils/responsive-utils";

type Gap = 1 | 2 | 4 | 8 | 16 | 32 | 64;
type Height = "full" | "screen";
type Items = "baseline" | "center" | "end" | "start";
type Justify = "around" | "between" | "center" | "end" | "evenly" | "start";
type TextAlign = "center" | "left" | "right";

type Props = {
  children: ReactNode | ReactNode[];
  className: string;
  gap?: ResponsiveProp<Gap>;
  height?: Height;
  items?: ResponsiveProp<Items>;
  justify?: ResponsiveProp<Justify>;
  overflow?: "auto" | "hidden" | "scroll" | "visible";
  textAlign?: ResponsiveProp<TextAlign>;
};

export function Base({
  children,
  className,
  gap: gapProp,
  height,
  items: itemsProp,
  justify: justifyProp,
  overflow,
  textAlign: textAlignProp,
}: Props) {
  const gap = gapProp ? toResponsiveObject(gapProp) : undefined;
  const items = itemsProp ? toResponsiveObject(itemsProp) : undefined;
  const justify = justifyProp ? toResponsiveObject(justifyProp) : undefined;
  const textAlign = textAlignProp
    ? toResponsiveObject(textAlignProp)
    : undefined;

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
        "h-full": height === "full",
        "h-screen": height === "screen",
        "items-baseline": items?.base === "baseline",
        "items-center": items?.base === "center",
        "items-end": items?.base === "end",
        "items-start": items?.base === "start",
        "justify-around": justify?.base === "around",
        "justify-between": justify?.base === "between",
        "justify-center": justify?.base === "center",
        "justify-end": justify?.base === "end",
        "justify-evenly": justify?.base === "evenly",
        "justify-start": justify?.base === "start",
        "lg:gap-1": gap?.lg === 1,
        "lg:gap-2": gap?.lg === 2,
        "lg:gap-4": gap?.lg === 4,
        "lg:gap-8": gap?.lg === 8,
        "lg:gap-16": gap?.lg === 16,
        "lg:gap-32": gap?.lg === 32,
        "lg:gap-64": gap?.lg === 64,
        "lg:items-baseline": items?.lg === "baseline",
        "lg:items-center": items?.lg === "center",
        "lg:items-end": items?.lg === "end",
        "lg:items-start": items?.lg === "start",
        "lg:justify-around": justify?.lg === "around",
        "lg:justify-between": justify?.lg === "between",
        "lg:justify-center": justify?.lg === "center",
        "lg:justify-end": justify?.lg === "end",
        "lg:justify-evenly": justify?.lg === "evenly",
        "lg:justify-start": justify?.lg === "start",
        "lg:text-center": textAlign?.lg === "center",
        "lg:text-left": textAlign?.lg === "left",
        "lg:text-right": textAlign?.lg === "right",
        "md:gap-1": gap?.md === 1,
        "md:gap-2": gap?.md === 2,
        "md:gap-4": gap?.md === 4,
        "md:gap-8": gap?.md === 8,
        "md:gap-16": gap?.md === 16,
        "md:gap-32": gap?.md === 32,
        "md:gap-64": gap?.md === 64,
        "md:items-baseline": items?.md === "baseline",
        "md:items-center": items?.md === "center",
        "md:items-end": items?.md === "end",
        "md:items-start": items?.md === "start",
        "md:justify-around": justify?.md === "around",
        "md:justify-between": justify?.md === "between",
        "md:justify-center": justify?.md === "center",
        "md:justify-end": justify?.md === "end",
        "md:justify-evenly": justify?.md === "evenly",
        "md:justify-start": justify?.md === "start",
        "md:text-center": textAlign?.md === "center",
        "md:text-left": textAlign?.md === "left",
        "md:text-right": textAlign?.md === "right",
        "overflow-auto": overflow === "auto",
        "overflow-hidden": overflow === "hidden",
        "overflow-scroll": overflow === "scroll",
        "overflow-visible": overflow === "visible",
        "sm:gap-1": gap?.sm === 1,
        "sm:gap-2": gap?.sm === 2,
        "sm:gap-4": gap?.sm === 4,
        "sm:gap-8": gap?.sm === 8,
        "sm:gap-16": gap?.sm === 16,
        "sm:gap-32": gap?.sm === 32,
        "sm:gap-64": gap?.sm === 64,
        "sm:items-baseline": items?.sm === "baseline",
        "sm:items-center": items?.sm === "center",
        "sm:items-end": items?.sm === "end",
        "sm:items-start": items?.sm === "start",
        "sm:justify-around": justify?.sm === "around",
        "sm:justify-between": justify?.sm === "between",
        "sm:justify-center": justify?.sm === "center",
        "sm:justify-end": justify?.sm === "end",
        "sm:justify-evenly": justify?.sm === "evenly",
        "sm:justify-start": justify?.sm === "start",
        "sm:text-center": textAlign?.sm === "center",
        "sm:text-left": textAlign?.sm === "left",
        "sm:text-right": textAlign?.sm === "right",
        "text-center": textAlign?.base === "center",
        "text-left": textAlign?.base === "left",
        "text-right": textAlign?.base === "right",
      })}
    >
      {children}
    </div>
  );
}

export type BaseProps = Omit<Props, "className">;
