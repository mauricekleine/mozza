"use client";

import { Moon, Sun } from "~/ui/icon";
import NavMd from "~/ui/nav/nav-md";
import NavSm from "~/ui/nav/nav-sm";
import Toggle from "~/ui/toggle";
import useColorScheme from "~/utils/use-color-scheme";

export default function Nav() {
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
        <NavMd colorSchemeToggle={ColorSchemeToggle} />

        <NavSm colorSchemeToggle={ColorSchemeToggle} />
      </nav>
    </>
  );
}
