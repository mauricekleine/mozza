"use client";

import { usePathname } from "next/navigation";
import { forwardRef } from "react";

import { Link, LinkProps, LinkRef, Text, TextSize } from "@/ui/typography";

type Props<T extends string> = LinkProps<T> & {
  children: string | string[];
  size?: TextSize;
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
