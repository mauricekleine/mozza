import classNames from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { HTMLAttributes, ReactNode } from "react";

import Theme from "./theme";

type Props = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLAnchorElement>["className"];
  href: string;
  type?: "default" | "nav" | "title";
};

const Link = ({ children, href, className, type = "default" }: Props) => {
  const router = useRouter();
  const isActiveRoute = router.route.includes(href);
  const isInternalLink = href.startsWith("/");

  const sharedClassnames = classNames(
    "inline-block leading-tight",
    {
      "mb-2": type === "title",
      "underline hover:no-underline": type !== "nav",
    },
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
              {children}
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
          {children}
        </a>
      )}
    </Theme>
  );
};

export default Link;
