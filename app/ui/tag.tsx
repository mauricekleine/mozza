import classNames from "classnames";
import type { ReactNode } from "react";

import Link from "~/ui/link";

type Props = {
  children: ReactNode;
  href?: HTMLAnchorElement["href"];
};

export default function Tag({ children, href }: Props) {
  const sharedClassnames =
    "bg-primary-200 inline-block mr-2 px-1.5 py-0.5 rounded-md text-primary-800 text-xs uppercase whitespace-nowrap dark:bg-primary-700 dark:text-primary-200";

  return href ? (
    <Link
      className={classNames(
        "hover:bg-primary-100 dark:hover:bg-primary-600",
        sharedClassnames
      )}
      href={href}
    >
      {children}
    </Link>
  ) : (
    <span className={sharedClassnames}>{children}</span>
  );
}
