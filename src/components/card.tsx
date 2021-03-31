import classNames from "classnames";
import { ReactNode } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => (
  <Theme>
    {({ bg }) => (
      <div className={classNames(bg.gray, "rounded-md shadow-sm")}>
        {children}
      </div>
    )}
  </Theme>
);

export default Card;
