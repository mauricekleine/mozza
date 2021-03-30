import classNames from "classnames";
import { ReactNode } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
};

const Heading = ({ children }: Props) => (
  <Theme>
    {({ text }) => (
      <p
        className={classNames(
          text.dark,
          "antialiased font-bold font-sans leading-relaxed text-3xl"
        )}
      >
        {children}
      </p>
    )}
  </Theme>
);

export default Heading;
