import classNames from "classnames";
import { ReactNode } from "react";

import Link from "./link";
import Theme from "./theme";

type Props = {
  children: ReactNode;
  href?: HTMLAnchorElement["href"];
};

const Tag = ({ children, href }: Props) => {
  const sharedClassnames =
    "font-sans inline-block mr-2 px-1.5 py-0.5 rounded-md text-xs uppercase whitespace-nowrap";

  return (
    <Theme>
      {({ bg, text }) =>
        href ? (
          <Link
            className={classNames(
              bg.dark,
              bg.darkHover,
              sharedClassnames,
              text.dark
            )}
            href={href}
          >
            {children}
          </Link>
        ) : (
          <span className={classNames(bg.dark, text.dark, sharedClassnames)}>
            {children}
          </span>
        )
      }
    </Theme>
  );
};

export default Tag;
