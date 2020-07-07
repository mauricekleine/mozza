/** @jsx createElement */
import classNames from "classnames";
import { ReactNode, createElement } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
};

const Subtitle = ({ children }: Props) => (
  <Theme>
    {({ text }) => (
      <p className={classNames("mb-4", text.color.muted)}>{children}</p>
    )}
  </Theme>
);

export default Subtitle;
