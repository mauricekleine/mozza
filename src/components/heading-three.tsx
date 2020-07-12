/** @jsx createElement */
import classNames from "classnames";
import { ReactNode, createElement } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
};

const HeadingThree = ({ children }: Props) => (
  <Theme>
    {({ border }) => (
      <p className={classNames("border-b-2", "font-bold", border.default)}>
        {children}
      </p>
    )}
  </Theme>
);

export default HeadingThree;
