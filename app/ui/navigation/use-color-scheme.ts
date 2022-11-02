"use client";

import { useCallback, useEffect, useState } from "react";

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<"dark" | "light">("dark");

  const updateColorScheme = (colorScheme: "dark" | "light") => {
    if (colorScheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setColorScheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setColorScheme("light");
    }
  };

  const toggleColorScheme = useCallback(() => {
    if (colorScheme === "dark") {
      updateColorScheme("light");
    } else {
      updateColorScheme("dark");
    }
  }, [colorScheme]);

  useEffect(() => {
    const hasDarkModePref = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const hasThemeStored = "theme" in localStorage;

    if (
      (hasThemeStored && localStorage.getItem("theme") === "dark") ||
      (!hasThemeStored && hasDarkModePref)
    ) {
      updateColorScheme("dark");
    } else {
      updateColorScheme("light");
    }
  }, []);

  return {
    colorScheme,
    toggleColorScheme,
  };
};

export default useColorScheme;
