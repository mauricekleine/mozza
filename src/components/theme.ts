import { createContext } from "react";

export const theme = {
  bg: {
    default: "bg-red-500",
    section: "bg-white",
  },
  border: {
    default: "border-red-500",
    section: "border-red-800",
  },
  text: {
    color: {
      default: "text-gray-900",
      hover: "text-red-500 hover:text-red-800",
      muted: "text-gray-800",
      primary: "text-red-500",
    },
    size: {
      base: "text-lg sm:text-xl",
      lg: "text-3xl sm:text-4xl",
      md: "text-2xl sm:text-3xl",
      xl: "text-5xl sm:text-6xl",
    },
  },
};

const ThemeContext = createContext(theme);
const Theme = ThemeContext.Consumer;

export const ThemeProvider = ThemeContext.Provider;

export default Theme;
