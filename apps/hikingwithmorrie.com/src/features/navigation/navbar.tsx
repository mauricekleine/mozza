import Image from "next/image";

import { Dictionary, Locale } from "@/i18n";
import { LanguageSwitcher } from "@/i18n/language-switcher";
import { Button } from "@/ui/button";
import { Container, Stack } from "@/ui/layout";
import { Text } from "@/ui/typography";

import Logo from "./logo.svg";
import { NavbarLink } from "./navbar-link";

type Props = {
  dictionary: Dictionary;
  locale: Locale;
};

export function Navbar({ dictionary, locale }: Props) {
  return (
    <nav className="fixed top-0 w-full bg-white/90 shadow-lg backdrop-blur-md">
      <Container size="lg">
        <div className="flex h-16 items-center justify-between">
          <Stack direction="horizontal" gap={8}>
            <div className="flex-shrink-0">
              <Image
                alt={dictionary.meta.logo.alt}
                className="h-9 w-9"
                height={32}
                src={Logo}
                width={32}
              />
            </div>

            <Stack direction="horizontal" gap={4} items="center">
              <NavbarLink href={`/${locale}`}>
                {dictionary.navigation.home}
              </NavbarLink>

              <NavbarLink href={`/${locale}/hikes`}>
                {dictionary.navigation.hikes}
              </NavbarLink>

              <NavbarLink href={`/${locale}/blog`}>
                {dictionary.navigation.blog}
              </NavbarLink>

              <NavbarLink href={`/${locale}/about`}>
                {dictionary.navigation.about}
              </NavbarLink>

              <NavbarLink href={`/${locale}/contact`}>
                {dictionary.navigation.contact}
              </NavbarLink>
            </Stack>
          </Stack>

          <Stack direction="horizontal" gap={4} items="center">
            <Button>
              <Text family="serif" transform="capitalize">
                {dictionary.navigation.cta}
              </Text>
            </Button>

            <LanguageSwitcher locale={locale} />
          </Stack>
        </div>
      </Container>
    </nav>
  );
}
