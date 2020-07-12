/** @jsx createElement */
import classNames from "classnames";
import { ReactNode, createElement } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
  href: string;
};

const Link = ({ children, href }: Props) => (
  <Theme>
    {({ text }) => (
      <a
        className={classNames("inline-block underline", text.color.hover)}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )}
  </Theme>
);

export default Link;
