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
      <p
        className={classNames(
          "font-bold",
          "leading-normal",
          "my-4",
          "text-center",
          text.size.md,
          `sm:${text.size.lg}`
        )}
      >
        {children}
      </p>
    )}
  </Theme>
);

export default HeadingTwo;
