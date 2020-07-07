/** @jsx createElement */
import classNames from "classnames";
import { ReactNode, createElement } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
};

const HeadingTwo = ({ children }: Props) => (
  <Theme>
    {({ text }) => (
      <p className={classNames("leading-loose", text.size.subtitle)}>
        {children}
      </p>
    )}
  </Theme>
);

export default HeadingTwo;
