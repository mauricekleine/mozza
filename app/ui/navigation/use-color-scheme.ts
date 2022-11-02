"use client";

import { useCallback, useEffect, useState } from "react";

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<"dark" | "light">(() => {
    if (typeof window === undefined) {
      return "dark";
    }

    const hasDarkModePref = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const hasThemeStored = "theme" in localStorage;

    if (
      (hasThemeStored && localStorage.getItem("theme") === "dark") ||
      (!hasThemeStored && hasDarkModePref)
    ) {
      return "dark";
    }

    return "light";
  });

  const toggleColorScheme = useCallback(() => {
    if (colorScheme === "dark") {
      setColorScheme("light");
    } else {
      setColorScheme("dark");
    }
  }, [colorScheme, setColorScheme]);

  useEffect(() => {
    if (colorScheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    if (colorScheme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [colorScheme]);

  return {
    colorScheme,
    toggleColorScheme,
  };
};

export default useColorScheme;
