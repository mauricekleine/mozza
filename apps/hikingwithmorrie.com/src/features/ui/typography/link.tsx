import { Link as LinkBase, LinkProps as LinkBaseProps } from "@mozza-ui/react";
import { clsx } from "clsx";
import type { Route } from "next";
import NextLink from "next/link";

type Props<H extends string> = LinkBaseProps<Route<H> | H> & {
  isActive?: boolean;
};

export function Link<H extends string>({
  as,
  children,
  isActive,
  ...props
}: Props<H>) {
  return (
    <LinkBase
      as={as ?? NextLink}
      className={clsx("-mb-0.5 border-b-2 transition-colors", {
        "border-b-green-dark text-green-dark": isActive,
        "text-grey-dark hover:text-green-dark border-b-transparent transition-transform":
          !isActive,
      })}
      {...props}
    >
      {children}
    </LinkBase>
  );
}

export type { Props as LinkProps };
