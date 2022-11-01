import classNames from "classnames";
import type { ReactNode } from "react";

import { Link } from "~/ui/typography";

type Props = {
  children: ReactNode;
  href?: HTMLAnchorElement["href"];
};

export function Tag({ children, href }: Props) {
  const sharedClassnames =
    "bg-primary-200 px-2 py-0.5 rounded-md text-primary-800 text-xs tracking-tight uppercase whitespace-nowrap dark:bg-primary-700 dark:text-primary-200";

  if (href) {
    return (
      <Link
        className={classNames(
          "hover:bg-primary-100 dark:hover:bg-primary-600",
          sharedClassnames
        )}
        href={href}
      >
        {children}
      </Link>
    );
  }

  return <span className={sharedClassnames}>{children}</span>;
}
