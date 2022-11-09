"use client";

import classNames from "classnames";
import NextLink from "next/link";
import { ArrowUpRight } from "phosphor-react";
import type { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLAnchorElement>["className"];
  href: string;
  type?: "default" | "nav";
};

export function Link({ children, href, type = "default" }: Props) {
  const isInternalLink = !href.startsWith("http");

  const className = classNames("leading-normal", {
    "text-sm text-white": type == "nav",
    "underline hover:no-underline": type !== "nav",
  });

  if (isInternalLink) {
    return (
      <NextLink className={className} href={href}>
        {children}
      </NextLink>
    );
  }

  return (
    <a
      className="inline-flex items-center text-slate-400 underline transition-colors hover:text-slate-200 hover:no-underline"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span>{children}</span>

      <ArrowUpRight className="inline-block" />
    </a>
  );
}
