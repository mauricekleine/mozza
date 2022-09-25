import classNames from "classnames";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  hasDivider?: boolean;
};

const Heading = ({ children, hasDivider = false }: Props) => (
  <h2
    className={classNames(
      "mb-1 font-sans text-2xl font-bold text-primary-800 dark:text-primary-100 sm:mb-2 sm:text-3xl",
      {
        "mb-2 border-b border-primary-300": hasDivider,
      }
    )}
  >
    {children}
  </h2>
);

export default Heading;
