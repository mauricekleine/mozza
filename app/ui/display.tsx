import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Display({ children }: Props) {
  return (
    <h1 className="my-12 text-5xl font-black leading-none text-primary-800 dark:text-primary-100 sm:text-6xl">
      {children}
    </h1>
  );
}
