import classNames from "classnames";
import { ReactNode } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
  href?: HTMLAnchorElement["href"];
};

const Tag = ({ children, href }: Props) => (
  <Theme>
    {({ bg, text }) =>
      href ? (
        <a
          className={classNames(
            bg.dark,
            bg.darkHover,
            text.dark,
            "font-sans mr-2 px-1.5 py-0.5 rounded-md text-xs underline uppercase whitespace-nowrap hover:bg-gray-100"
          )}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {children}
        </a>
      ) : (
        <span
          className={classNames(
            bg.dark,
            text.dark,
            "font-sans mr-2 px-1.5 py-0.5 rounded-md text-xs uppercase whitespace-nowrap"
          )}
        >
          {children}
        </span>
      )
    }
  </Theme>
);

export default Tag;
