import classNames from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLAnchorElement>["className"];
  href: string;
  type?: "default" | "nav";
};

const Link = ({ children, href, className, type = "default" }: Props) => {
  const { pathname } = useRouter();
  const isRootRoute = href === "/" && pathname === "/";
  const isActiveRoute =
    isRootRoute || (href.length > 1 && pathname.includes(href));
  const isInternalLink = href.startsWith("/");

  const sharedClassnames = classNames(
    "leading-normal",
    {
      "text-sm text-white": type == "nav",
      "underline hover:no-underline": type !== "nav",
    },
    className
  );

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a
          className={classNames(sharedClassnames, {
            "font-bold": isActiveRoute,
          })}
        >
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a
      className={sharedClassnames}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Link;
