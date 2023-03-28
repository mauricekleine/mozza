import { ArrowUpRight } from "@mozza-icons/react";
import NextLink from "next/link";
import type { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLAnchorElement>["className"];
  href: string;
};

export function Link({ children, href }: Props) {
  const isInternalLink = !href.startsWith("http");

  const className =
    "text-slate-400 underline transition-colors hover:text-slate-200 hover:no-underline";

  if (isInternalLink) {
    return (
      <NextLink className={className} href={href}>
        {children}
      </NextLink>
    );
  }

  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span>{children}</span>

      <ArrowUpRight />
    </a>
  );
}
