/** @jsx createElement */
import classNames from "classnames";
import { ReactNode, createElement } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
};

const HeadingOne = ({ children }: Props) => (
  <Theme>
    {({ text }) => (
      <p
        className={classNames("leading-loose", "text-3xl", text.color.primary)}
      >
        {children}
      </p>
    )}
  </Theme>
);

export default HeadingOne;
