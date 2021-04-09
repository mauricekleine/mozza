import { useCallback, useEffect, useState } from "react";

const useColorScheme = () => {
  const [colorScheme, setColorScheme] = useState<"dark" | "light">("light");

  const toggleColorScheme = useCallback(() => {
    if (colorScheme === "dark") {
      setColorScheme("light");
    } else {
      setColorScheme("dark");
    }
  }, [colorScheme, setColorScheme]);

  useEffect(() => {
    const hasDarkModePref = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    const hasThemeStored = "theme" in localStorage;

    if (
      (hasThemeStored && localStorage.getItem("theme") === "dark") ||
      (!hasThemeStored && hasDarkModePref)
    ) {
      setColorScheme("dark");
    } else {
      setColorScheme("light");
    }
  }, []);

  useEffect(() => {
    if (colorScheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
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
