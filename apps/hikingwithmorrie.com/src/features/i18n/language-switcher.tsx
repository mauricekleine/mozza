"use client";

import { usePathname } from "next/navigation";

import { NavbarLink } from "@/navigation/navbar-link";
import { Stack } from "@/ui/layout";

import { Locale } from ".";

type Props = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: Props) {
  const pathname = usePathname();
  const barePath = pathname.slice(3);

  return (
    <Stack direction="horizontal" gap={4}>
      {/* @ts-expect-error */}
      <NavbarLink href={`/en/${barePath}`} isActive={locale === "en"} size="sm">
        English
      </NavbarLink>

      {/* @ts-expect-error */}
      <NavbarLink href={`/nl/${barePath}`} isActive={locale === "nl"} size="sm">
        Nederlands
      </NavbarLink>
    </Stack>
  );
}
