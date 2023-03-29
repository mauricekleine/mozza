import { clsx } from "clsx";
import { ReactNode } from "react";

import { Color, getTextColorClassName } from "../theme/color-utils";

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
  color?: Color;
};

export function IconBase({ children, className = "h-5 w-5", color }: Props) {
  const textColorClassName = getTextColorClassName(color);

  return (
    <svg
      className={clsx(
        className,
        textColorClassName,
        "inline-block text-center"
      )}
      fill="currentColor"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export type IconBaseProps = Omit<Props, "children">;
