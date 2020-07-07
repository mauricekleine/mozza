/** @jsx createElement */
import classNames from "classnames";
import { ReactNode, createElement } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
};

const Title = ({ children }: Props) => (
  <Theme>
    {({ text }) => (
      <p className={classNames("font-bold", text.size.title)}>{children}</p>
    )}
  </Theme>
);

export default Title;
