"use client";

import { TextProps } from "@mozza-ui/react";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

import { Link, LinkProps, LinkRef, Text } from "~/ui/typography";

type Props<T extends string> = LinkProps<T> & {
  children: string | string[];
  size?: TextProps["size"];
};

export const NavbarLink = forwardRef(function NavbarLinkWithForwardedRef<
  T extends string
>({ children, size, ...props }: Props<T>, ref: LinkRef) {
  const pathname = usePathname();
  const isActiveLink = pathname === props.href;

  return (
    <Link isActive={isActiveLink || props.isActive} ref={ref} {...props}>
      <Text as="span" family="serif" size={size} transform="capitalize">
        {children}
      </Text>
    </Link>
  );
});
