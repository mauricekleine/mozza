import classNames from "classnames";
import { ReactNode } from "react";

import Link from "./link";

type Props = {
  children: ReactNode;
  href?: HTMLAnchorElement["href"];
};

const Tag = ({ children, href }: Props) => {
  const sharedClassnames =
    "bg-primary-200 font-sans inline-block mr-2 px-1.5 py-0.5 rounded-md text-primary-800 text-xs uppercase whitespace-nowrap";

  return href ? (
    <Link
      className={classNames("hover:bg-primary-100", sharedClassnames)}
      href={href}
    >
      {children}
    </Link>
  ) : (
    <span className={sharedClassnames}>{children}</span>
  );
};

export default Tag;
