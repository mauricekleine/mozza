"use client";

import { TextProps } from "@mozza-ui/react";
import { Route } from "next";
import { usePathname } from "next/navigation";

import { Link, LinkProps, Text } from "~/ui/typography";

type Props<H extends string = string> = LinkProps<Route<H>> & {
  children: string | string[];
  size?: TextProps["size"];
};

export function NavbarLink<H extends string>({
  children,
  size,
  ...props
}: Props<H>) {
  const pathname = usePathname();
  const isActiveLink = pathname === props.href;

  return (
    <Link isActive={isActiveLink || props.isActive} {...props}>
      <Text as="span" family="serif" size={size} transform="capitalize">
        {children}
      </Text>
    </Link>
  );
}
