import classNames from "classnames";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export default function SpaceContainer({ children, size = "md" }: Props) {
  return (
    <div
      className={classNames({
        "space-y-10": size === "lg",
        "space-y-2": size === "xs",
        "space-y-32": size === "xl",
        "space-y-6": size === "sm",
        "space-y-8": size === "md",
      })}
    >
      {children}
    </div>
  );
}
