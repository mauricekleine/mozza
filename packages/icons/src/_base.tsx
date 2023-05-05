import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
};

export function IconBase({ children, className, ...props }: Props) {
  return (
    <svg
      className={className}
      fill="currentColor"
      style={{ display: "inline-block" }}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

export type IconBaseProps = Omit<Props, "children">;
