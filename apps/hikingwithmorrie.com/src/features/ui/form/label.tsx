import clsx from "clsx";
import { ReactNode } from "react";

import { Color, textColorVariants } from "../theme/color-utils";

type Props = {
  children: ReactNode;
  color?: Color;
  htmlFor: string;
};

export function Label({ children, color, htmlFor }: Props) {
  const textColorClassName = textColorVariants({ color });

  return (
    <label
      className={clsx(textColorClassName, "text-xs font-bold tracking-tight")}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
