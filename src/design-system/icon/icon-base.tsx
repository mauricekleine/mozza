import { clsx } from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
};

export function IconBase({ children, className = "h-4 w-4" }: Props) {
  return (
    <svg
      className={clsx("inline-block", className)}
      fill="currentColor"
      height="192"
      viewBox="0 0 256 256"
      width="192"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="none" height="256" width="256"></rect>

      {children}
    </svg>
  );
}
