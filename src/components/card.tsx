import classNames from "classnames";
import { ReactNode } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => (
  <Theme>
    {({ bg }) => (
      <div className={classNames(bg.white, "rounded-md shadow-sm")}>
        {children}
      </div>
    )}
  </Theme>
);

export default Card;
