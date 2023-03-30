import { clsx } from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
};

export function IconBase({ children, className = "h-5 w-5" }: Props) {
  return (
    <svg
      className={clsx(className, "inline-block")}
      fill="currentColor"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

export type IconBaseProps = Omit<Props, "children">;
