import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Display = ({ children }: Props) => (
  <h1 className="my-12 font-sans text-5xl font-black leading-none text-primary-800 dark:text-primary-100 sm:text-6xl">
    {children}
  </h1>
);

export default Display;
