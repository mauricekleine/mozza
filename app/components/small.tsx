import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Small = ({ children }: Props) => (
  <p className="font-normal font-sans text-primary-600 text-sm dark:text-primary-400">
    {children}
  </p>
);

export default Small;
