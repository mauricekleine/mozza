import { clsx } from "clsx";

import { ResponsiveProp, toResponsiveObject } from "../utils/responsive-utils";

import { Base, BaseProps } from "./_base";

type Props = BaseProps & {
  direction?: ResponsiveProp<
    "horizontal" | "vertical" | "horizontal-reverse" | "vertical-reverse"
  >;
  wrap?: boolean;
};

export function Stack({
  children,
  direction: directionProp = { base: "vertical" },
  wrap,
  ...props
}: Props) {
  const direction = toResponsiveObject(directionProp);

  return (
    <Base
      className={clsx("flex", {
        "flex-col": direction.base === "vertical",
        "flex-col-reverse": direction.base === "vertical-reverse",
        "flex-row": direction.base === "horizontal",
        "flex-row-reverse": direction.base === "horizontal-reverse",
        "flex-wrap": wrap === true,
        "lg:flex-col": direction.lg === "vertical",
        "lg:flex-col-reverse": direction.lg === "vertical-reverse",
        "lg:flex-row": direction.lg === "horizontal",
        "lg:flex-row-reverse": direction.lg === "horizontal-reverse",
        "md:flex-col": direction.md === "vertical",
        "md:flex-col-reverse": direction.md === "vertical-reverse",
        "md:flex-row": direction.md === "horizontal",
        "md:flex-row-reverse": direction.md === "horizontal-reverse",
        "sm:flex-col": direction.sm === "vertical",
        "sm:flex-col-reverse": direction.sm === "vertical-reverse",
        "sm:flex-row": direction.sm === "horizontal",
        "sm:flex-row-reverse": direction.sm === "horizontal-reverse",
      })}
      {...props}
    >
      {children}
    </Base>
  );
}