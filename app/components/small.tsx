import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Small = ({ children }: Props) => (
  <p className="font-sans text-sm font-normal text-primary-600 dark:text-primary-400">
    {children}
  </p>
);

export default Small;
