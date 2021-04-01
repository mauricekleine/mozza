import classNames from "classnames";
import { ReactNode } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
  hasDivider?: boolean;
};

const Heading = ({ children, hasDivider = false }: Props) => (
  <Theme>
    {({ text }) => (
      <p
        className={classNames(
          text.darker,
          "font-bold font-sans mb-2 text-2xl sm:text-3xl",
          {
            "border-b-2 mb-4": hasDivider,
          }
        )}
      >
        {children}
      </p>
    )}
  </Theme>
);

export default Heading;
