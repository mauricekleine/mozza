import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  hasDivider?: boolean;
};

const Heading = ({ children, hasDivider = false }: Props) => (
  <p
    className={classNames(
      "font-bold font-sans mb-2 text-2xl text-primary-800 sm:text-3xl",
      {
        "border-b-2 mb-4": hasDivider,
      }
    )}
  >
    {children}
  </p>
);

export default Heading;
