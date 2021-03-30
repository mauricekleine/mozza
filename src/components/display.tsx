import classNames from "classnames";
import { ReactNode } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
};

const Title = ({ children }: Props) => (
  <Theme>
    {({ text }) => (
      <p
        className={classNames(
          text.dark,
          "antialiased font-sans font-black leading-none my-12 text-6xl"
        )}
      >
        {children}
      </p>
    )}
  </Theme>
);

export default Title;
