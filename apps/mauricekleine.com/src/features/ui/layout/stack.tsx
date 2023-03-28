import { clsx } from "clsx";

import { ResponsiveProp, toResponsiveObject } from "../responsive-utils";

import { Root, RootProps } from "./root";

type Props = {
  direction?: ResponsiveProp<"horizontal" | "vertical">;
  height?: "screen";
  wrap?: boolean;
} & Omit<RootProps, "className">;

export function Stack({
  children,
  direction: directionProp = { base: "vertical" },
  height,
  wrap,
  ...props
}: Props) {
  const direction = toResponsiveObject(directionProp);

  return (
    <Root
      className={clsx("flex", {
        "flex-col": direction.base === "vertical",
        "flex-row": direction.base === "horizontal",
        "flex-wrap": wrap === true,
        "h-screen": height === "screen",
        "lg:flex-col": direction.lg === "vertical",
        "lg:flex-row": direction.lg === "horizontal",
        "md:flex-col": direction.md === "vertical",
        "md:flex-row": direction.md === "horizontal",
        "sm:flex-col": direction.sm === "vertical",
        "sm:flex-row": direction.sm === "horizontal",
      })}
      {...props}
    >
      {children}
    </Root>
  );
}
