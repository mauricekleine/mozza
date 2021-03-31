import classNames from "classnames";
import { ReactNode } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
  href?: string;
};

const ExternalLink = ({ children, href }: Props) => (
  <Theme>
    {({ text }) => (
      <a
        className={classNames(text.link, "underline hover:no-underline")}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )}
  </Theme>
);

export default ExternalLink;
