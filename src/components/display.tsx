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
          text.darker,
          "font-sans font-black leading-none my-12 text-5xl sm:text-6xl"
        )}
      >
        {children}
      </p>
    )}
  </Theme>
);

export default Title;
