import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  hasDivider?: boolean;
};

const Heading = ({ children, hasDivider = false }: Props) => (
  <h2
    className={classNames(
      "font-bold font-sans mb-1 text-2xl text-primary-800 sm:mb-2 sm:text-3xl",
      {
        "border-b border-primary-300 mb-2": hasDivider,
      }
    )}
  >
    {children}
  </h2>
);

export default Heading;
