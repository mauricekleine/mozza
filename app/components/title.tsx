import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Title = ({ children }: Props) => (
  <h3 className="font-bold text-lg text-primary-900 dark:text-primary-50">
    {children}
  </h3>
);

export default Title;
