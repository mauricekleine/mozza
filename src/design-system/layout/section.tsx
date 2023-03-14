import { clsx } from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  size?: "md" | "lg";
};

export function Section({ children, size = "md" }: Props) {
  return (
    <div
      className={clsx("mx-auto", {
        "w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12": size === "md",
        "w-11/12 sm:w-11/12 md:w-10/12 lg:w-10/12": size === "lg",
      })}
    >
      {children}
    </div>
  );
}
