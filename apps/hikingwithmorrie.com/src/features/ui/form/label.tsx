import clsx from "clsx";
import { ReactNode } from "react";

import { Color, getTextColorClassName } from "../theme/color-utils";

type Props = {
  children: ReactNode;
  color?: Color;
  htmlFor: string;
};

export function Label({ children, color, htmlFor }: Props) {
  const textColorClassName = getTextColorClassName(color);

  return (
    <label
      className={clsx(textColorClassName, "text-xs font-bold tracking-tight")}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
