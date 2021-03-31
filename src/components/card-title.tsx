import classNames from "classnames";
import { ReactNode } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
};

const CardTitle = ({ children }: Props) => (
  <Theme>
    {({ text }) => (
      <p className={classNames(text.dark, "font-bold mb-1")}>{children}</p>
    )}
  </Theme>
);

export default CardTitle;
