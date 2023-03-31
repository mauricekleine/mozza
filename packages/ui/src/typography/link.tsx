import { ArrowUpRight } from "@mozza-icons/react";
import clsx from "clsx";
import { JSXElementConstructor, ReactNode, Ref, forwardRef } from "react";

import { As } from "../system";

function isExternalLink(href: string) {
  return href.startsWith("http");
}

type Props<
  H extends string = string,
  A extends "a" | JSXElementConstructor<any> = "a"
> = {
  as?: A;
  children: ReactNode;
  href: H;
};

export const Link = forwardRef(function LinkWithForwardedRef<
  H extends string = string,
  A extends "a" | JSXElementConstructor<any> = "a"
>(
  {
    as,
    children,
    className,
    href,
  }: Props<H, A> & {
    className?: string;
  },
  ref: LinkRef
) {
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

  return (
    <As
      as={as ?? "a"}
      className={clsx(className, "inline-flex items-center space-x-2")}
      href={href}
      ref={ref}
    >
      {children}
    </As>
  );
});

export type { Props as LinkProps };
export type LinkRef = Ref<HTMLAnchorElement>;
