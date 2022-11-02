"use client";

import { Toggle } from "~/ui/forms";
import { Moon, Sun } from "~/ui/icon";

import useColorScheme from "./use-color-scheme";

export const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Toggle
      isToggled={colorScheme === "dark"}
      leftLabel={<Sun className="h-4 w-4" />}
      onToggle={toggleColorScheme}
      rightLabel={<Moon className="h-4 w-4" />}
    />
  );
};
