"use client";

import { Stack } from "@mozza-ui/react";
import { usePathname } from "next/navigation";

import { NavbarLink } from "@/navigation/navbar-link";

import { Locale } from ".";

type Props = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname();
  const barePath = pathname.slice(3);

  return (
    <Stack direction="horizontal" gap={4}>
      <NavbarLink href={`/en/${barePath}`} isActive={locale === "en"} size="sm">
        English
      </NavbarLink>

      <NavbarLink href={`/nl/${barePath}`} isActive={locale === "nl"} size="sm">
        Nederlands
      </NavbarLink>
    </Stack>
  );
}
