import { clsx } from "clsx";

import { ResponsiveProp, toResponsiveObject } from "../theme/responsive-utils";

import { Base, BaseProps } from "./base";

type Columns = "auto" | "none" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Rows = "auto" | "none" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type Props = {
  columns?: ResponsiveProp<Columns>;
  rows?: ResponsiveProp<Rows>;
} & Omit<BaseProps, "className">;

export function Grid({
  children,
  columns: columnsProp,
  rows: rowsProp,
  ...props
}: Props) {
  const columns = columnsProp ? toResponsiveObject(columnsProp) : undefined;
  const rows = rowsProp ? toResponsiveObject(rowsProp) : undefined;

  return (
    <Base
      className={clsx("grid", {
        "grid-cols-1": columns?.base === 1,
        "grid-cols-2": columns?.base === 2,
        "grid-cols-3": columns?.base === 3,
        "grid-cols-4": columns?.base === 4,
        "grid-cols-5": columns?.base === 5,
        "grid-cols-6": columns?.base === 6,
        "grid-cols-7": columns?.base === 7,
        "grid-cols-8": columns?.base === 8,
        "grid-cols-9": columns?.base === 9,
        "grid-cols-none": columns?.base === "none",
        "grid-flow-col": columns?.base === "auto",
        "grid-flow-row": rows?.base === "auto",
        "grid-rows-1": rows?.base === 1,
        "grid-rows-2 ": rows?.base === 2,
        "grid-rows-3": rows?.base === 3,
        "grid-rows-4": rows?.base === 4,
        "grid-rows-5": rows?.base === 5,
        "grid-rows-6": rows?.base === 6,
        "grid-rows-7": rows?.base === 7,
        "grid-rows-8": rows?.base === 8,
        "grid-rows-9": rows?.base === 9,
        "grid-rows-none": rows?.base === "none",
        "lg:grid-cols-1": columns?.lg === 1,
        "lg:grid-cols-2": columns?.lg === 2,
        "lg:grid-cols-3": columns?.lg === 3,
        "lg:grid-cols-4": columns?.lg === 4,
        "lg:grid-cols-5": columns?.lg === 5,
        "lg:grid-cols-6": columns?.lg === 6,
        "lg:grid-cols-7": columns?.lg === 7,
        "lg:grid-cols-8": columns?.lg === 8,
        "lg:grid-cols-9": columns?.lg === 9,
        "lg:grid-cols-none": columns?.lg === "none",
        "lg:grid-flow-col": columns?.lg === "auto",
        "lg:grid-flow-row": rows?.lg === "auto",
        "lg:grid-rows-1": rows?.lg === 1,
        "lg:grid-rows-2": rows?.lg === 2,
        "lg:grid-rows-3": rows?.lg === 3,
        "lg:grid-rows-4": rows?.lg === 4,
        "lg:grid-rows-5": rows?.lg === 5,
        "lg:grid-rows-6": rows?.lg === 6,
        "lg:grid-rows-7": rows?.lg === 7,
        "lg:grid-rows-8": rows?.lg === 8,
        "lg:grid-rows-9": rows?.lg === 9,
        "lg:grid-rows-none": rows?.lg === "none",
        "md:grid-cols-1": columns?.md === 1,
        "md:grid-cols-2": columns?.md === 2,
        "md:grid-cols-3": columns?.md === 3,
        "md:grid-cols-4": columns?.md === 4,
        "md:grid-cols-5": columns?.md === 5,
        "md:grid-cols-6": columns?.md === 6,
        "md:grid-cols-7": columns?.md === 7,
        "md:grid-cols-8": columns?.md === 8,
        "md:grid-cols-9": columns?.md === 9,
        "md:grid-cols-none": columns?.md === "none",
        "md:grid-flow-col": columns?.md === "auto",
        "md:grid-flow-row": rows?.md === "auto",
        "md:grid-rows-1": rows?.md === 1,
        "md:grid-rows-2": rows?.md === 2,
        "md:grid-rows-3": rows?.md === 3,
        "md:grid-rows-4": rows?.md === 4,
        "md:grid-rows-5": rows?.md === 5,
        "md:grid-rows-6": rows?.md === 6,
        "md:grid-rows-7": rows?.md === 7,
        "md:grid-rows-8": rows?.md === 8,
        "md:grid-rows-9": rows?.md === 9,
        "md:grid-rows-none": rows?.md === "none",
        "sm:grid-cols-1": columns?.sm === 1,
        "sm:grid-cols-2": columns?.sm === 2,
        "sm:grid-cols-3": columns?.sm === 3,
        "sm:grid-cols-4": columns?.sm === 4,
        "sm:grid-cols-5": columns?.sm === 5,
        "sm:grid-cols-6": columns?.sm === 6,
        "sm:grid-cols-7": columns?.sm === 7,
        "sm:grid-cols-8": columns?.sm === 8,
        "sm:grid-cols-9": columns?.sm === 9,
        "sm:grid-cols-none": columns?.sm === "none",
        "sm:grid-flow-col": columns?.sm === "auto",
        "sm:grid-flow-row": rows?.sm === "auto",
        "sm:grid-rows-1": rows?.sm === 1,
        "sm:grid-rows-2": rows?.sm === 2,
        "sm:grid-rows-3": rows?.sm === 3,
        "sm:grid-rows-4": rows?.sm === 4,
        "sm:grid-rows-5": rows?.sm === 5,
        "sm:grid-rows-6": rows?.sm === 6,
        "sm:grid-rows-7": rows?.sm === 7,
        "sm:grid-rows-8": rows?.sm === 8,
        "sm:grid-rows-9": rows?.sm === 9,
        "sm:grid-rows-none": rows?.sm === "none",
      })}
      {...props}
    >
      {children}
    </Base>
  );
}
