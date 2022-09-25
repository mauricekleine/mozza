import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Title = ({ children }: Props) => (
  <h3 className="text-lg font-bold text-primary-900 dark:text-primary-50">
    {children}
  </h3>
);

export default Title;
