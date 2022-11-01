import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Title({ children }: Props) {
  return (
    <h3 className="text-lg font-bold text-primary-900 dark:text-primary-50">
      {children}
    </h3>
  );
}
