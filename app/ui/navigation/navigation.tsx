"use client";

import { Toggle } from "~/ui/forms";
import { Moon, Sun } from "~/ui/icon";
import useColorScheme from "~/utils/use-color-scheme";

import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export function Navigation() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const ColorSchemeToggle = (
    <Toggle
      isToggled={colorScheme === "dark"}
      leftLabel={<Sun className="h-4 w-4" />}
      onToggle={toggleColorScheme}
      rightLabel={<Moon className="h-4 w-4" />}
    />
  );

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-primary-900 dark:bg-black">
        <DesktopNavigation colorSchemeToggle={ColorSchemeToggle} />

        <MobileNavigation colorSchemeToggle={ColorSchemeToggle} />
      </nav>
    </>
  );
}
