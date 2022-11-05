import classNames from "classnames";
import type { ReactNode } from "react";

import { ResponsiveProp, toResponsiveObject } from "../responsive-utils";

type Columns = "none" | 1 | 2 | 3;
type Gap = 1 | 2 | 4 | 6 | 8 | 10 | 16 | 32;
type Rows = "none" | 1 | 2 | 3;

type Props = {
  children: ReactNode | ReactNode[];
  columns?: ResponsiveProp<Columns>;
  gap?: Gap;
  rows?: ResponsiveProp<Rows>;
};

export function Grid({
  children,
  columns: columnsProp,
  gap,
  rows: rowsProp,
}: Props) {
  const columns = columnsProp ? toResponsiveObject(columnsProp) : undefined;
  const rows = rowsProp ? toResponsiveObject(rowsProp) : undefined;

  return (
    <div
      className={classNames("grid grid-flow-col", {
        "gap-1": gap === 1,
        "gap-2": gap === 2,
        "gap-4": gap === 4,
        "gap-6": gap === 6,
        "gap-8": gap === 8,
        "gap-10": gap === 10,
        "gap-16": gap === 16,
        "gap-32": gap === 32,
        "grid-cols-none": columns?.base === "none",
        "grid-cols-1": columns?.base === 1,
        "grid-cols-2": columns?.base === 2,
        "grid-cols-3": columns?.base === 3,
        "sm:grid-cols-none": columns?.sm === "none",
        "sm:grid-cols-1": columns?.sm === 1,
        "sm:grid-cols-2": columns?.sm === 2,
        "sm:grid-cols-3": columns?.sm === 3,
        "md:grid-cols-none": columns?.md === "none",
        "md:grid-cols-1": columns?.md === 1,
        "md:grid-cols-2": columns?.md === 2,
        "md:grid-cols-3": columns?.md === 3,
        "lg:grid-cols-none": columns?.lg === "none",
        "lg:grid-cols-1": columns?.lg === 1,
        "lg:grid-cols-2": columns?.lg === 2,
        "lg:grid-cols-3": columns?.lg === 3,
        "xl:grid-cols-none": columns?.xl === "none",
        "xl:grid-cols-1": columns?.xl === 1,
        "xl:grid-cols-2": columns?.xl === 2,
        "xl:grid-cols-3": columns?.xl === 3,
        "grid-rows-none": rows?.base === "none",
        "grid-rows-1": rows?.base === 1,
        "grid-rows-2 ": rows?.base === 2,
        "grid-rows-3": rows?.base === 3,
        "sm:grid-rows-none": rows?.sm === "none",
        "sm:grid-rows-1": rows?.sm === 1,
        "sm:grid-rows-2": rows?.sm === 2,
        "sm:grid-rows-3": rows?.sm === 3,
        "md:grid-rows-none": rows?.md === "none",
        "md:grid-rows-1": rows?.md === 1,
        "md:grid-rows-2": rows?.md === 2,
        "md:grid-rows-3": rows?.md === 3,
        "lg:grid-rows-none": rows?.lg === "none",
        "lg:grid-rows-1": rows?.lg === 1,
        "lg:grid-rows-2": rows?.lg === 2,
        "lg:grid-rows-3": rows?.lg === 3,
        "xl:grid-rows-none": rows?.xl === "none",
        "xl:grid-rows-1": rows?.xl === 1,
        "xl:grid-rows-2": rows?.xl === 2,
        "xl:grid-rows-3": rows?.xl === 3,
      })}
    >
      {children}
    </div>
  );
}
