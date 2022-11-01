import classNames from "classnames";
import NextLink from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLAnchorElement>["className"];
  href: string;
  type?: "default" | "nav";
};

export default function Link({
  children,
  href,
  className,
  type = "default",
}: Props) {
  const isInternalLink = !href.startsWith("http");

  const sharedClassnames = classNames(
    "leading-normal",
    {
      "px-1 text-sm text-white": type == "nav",
      "underline hover:no-underline": type !== "nav",
    },
    className
  );

  if (isInternalLink) {
    return (
      <NextLink className={sharedClassnames} href={href}>
        {children}
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
}
