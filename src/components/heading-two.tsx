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
        className={classNames(
          "font-bold",
          "leading-normal",
          "my-2",
          text.size.md,
          text.color.primary
        )}
      >
        {children}
      </p>
    )}
  </Theme>
);

export default HeadingOne;
