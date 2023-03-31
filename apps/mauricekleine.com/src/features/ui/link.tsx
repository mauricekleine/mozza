import { Link as LinkBase, LinkProps as LinkBaseProps } from "@mozza-ui/react";
import { Route } from "next";
import NextLink from "next/link";

type Props<H extends string> = LinkBaseProps<Route<H> | H>;

export function Link<H extends string>({ as, children, ...props }: Props<H>) {
  return (
    <LinkBase
      as={as ?? NextLink}
      className="text-slate-400 underline transition-colors hover:text-slate-200 hover:no-underline"
      {...props}
    >
      {children}
    </LinkBase>
  );
}
