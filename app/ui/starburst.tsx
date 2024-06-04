import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function StarBurst({ children, className }: Props) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center justify-center bg-red-600 p-4 text-center text-lg font-black uppercase leading-none text-yellow-300 transition-transform clip-path-starburst hover:scale-110",
      )}
    >
      {children}
    </div>
  );
}
