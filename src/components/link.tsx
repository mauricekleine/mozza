import classNames from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { HTMLAttributes, ReactNode } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLAnchorElement>["className"];
  href: string;
};

const Link = ({ children, className, href }: Props) => {
  const router = useRouter();
  const isActiveRoute = router.route.includes(href);
  const isInternalLink = href.startsWith("/");

  const sharedClassnames = classNames(
    "leading-tight underline hover:no-underline",
    className
  );

  if (isInternalLink) {
    return (
      <Theme>
        {({ text }) => (
          <NextLink href={href}>
            <a
              className={classNames(sharedClassnames, text.darkest, {
                "font-bold": isActiveRoute,
              })}
            >
              <p>{children}</p>
            </a>
          </NextLink>
        )}
      </Theme>
    );
  }

  return (
    <Theme>
      {({ text }) => (
        <a
          className={classNames(sharedClassnames, text.darkest)}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <p>{children}</p>
        </a>
      )}
    </Theme>
  );
};

export default Link;
