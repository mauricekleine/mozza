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
      <p
        className={classNames(
          "font-bold",
          "leading-normal",
          "mb-2",
          text.size.lg,
          `sm:${text.size.xl}`
        )}
      >
        {children}
      </p>
    )}
  </Theme>
);

export default Title;
