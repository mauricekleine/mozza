import { ArrowUpRight } from "@mozza-icons/react";
import clsx from "clsx";
import { ReactNode, Ref, forwardRef } from "react";

function isExternalLink(
  href: string | `http${string}`
): href is `http${string}` {
  return href.startsWith("http");
}

type Props = {
  as?: "a";
  children: ReactNode;
  href: string | `http${string}`;
};

export const LinkBase = forwardRef(function LinkBaseWithForwardedRef(
  {
    as,
    children,
    className,
    href,
  }: Props & {
    className: string;
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

  const Element = as ?? "a";

  return (
    <Element
      className={clsx(className, "inline-flex items-center space-x-2")}
      href={href}
      ref={ref}
    >
      {children}
    </Element>
  );
});

export type { Props as LinkBaseProps };
export type LinkRef = Ref<HTMLAnchorElement>;
