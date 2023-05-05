import { ArrowUpRight } from "@mozza-icons/react";
import { Route } from "next";
import NextLink from "next/link";
import { ReactNode } from "react";

import styles from "./link.module.scss";

export function isExternalLink(href: string) {
  return href.startsWith("http");
}

type Props<H extends string> = {
  children: ReactNode;
  href: H | Route<H>;
};

export function Link<H extends string>({ children, href }: Props<H>) {
  const As = isExternalLink(href) ? "a" : NextLink;

  return (
    <As
      className={styles.link}
      href={href}
      rel={isExternalLink(href) ? "noopener noreferrer" : undefined}
      target={isExternalLink(href) ? "_blank" : undefined}
    >
      <span>{children}</span>

      {isExternalLink(href) ? <ArrowUpRight /> : null}
    </As>
  );
}
