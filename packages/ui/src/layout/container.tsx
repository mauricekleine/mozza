import { clsx } from "clsx";
import { clsxVariants } from "clsx-variants";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  size?: "md" | "lg";
};

const variants = clsxVariants({
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      md: "w-11/12 px-4 sm:w-10/12 sm:px-0 md:w-9/12 lg:w-8/12",
      lg: "w-11/12 px-4 sm:w-11/12 sm:px-0 md:w-10/12 lg:w-10/12",
    },
  },
});

export function Container({ children, size }: Props) {
  return <div className={variants("mx-auto", { size })}>{children}</div>;
}
