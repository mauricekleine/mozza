import clsx from "clsx";
import type { Route } from "next";
import NextLink from "next/link";
import { ReactNode, Ref, forwardRef } from "react";

import { ArrowUpRight } from "../icons";

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

function isExternalLink<T extends string>(
  href: Route<T> | `http${string}`
): href is `http${string}` {
  return href.startsWith("http");
}

type Props<T extends string> = {
  as?: "a";
  children: ReactNode;
  className: string;
  href: Route<T> | `http${string}`;
};

export const LinkBase = forwardRef(function LinkBaseWithForwardedRef<
  T extends string
>({ as, children, className, href }: Props<T>, ref: LinkRef) {
  if (isExternalLink(href)) {
    return (
      <a
        className={clsx(className, "inline-flex items-center space-x-2")}
        href={href}
        ref={ref}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}

        <ArrowUpRight />
      </a>
    );
  }

  const Element = as ?? NextLink;

  return (
    <Element className={className} href={href} ref={ref}>
      {children}
    </Element>
  );
});

export type LinkBaseProps<T extends string> = Omit<Props<T>, "className">;

export type LinkRef = Ref<HTMLAnchorElement>;
