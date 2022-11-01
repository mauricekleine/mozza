import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Small({ children }: Props) {
  return (
    <p className="text-sm font-normal text-primary-600 dark:text-primary-400">
      {children}
    </p>
  );
}
