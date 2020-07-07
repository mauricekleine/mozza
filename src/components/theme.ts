import { createContext } from "react";

export const theme = {
  bg: {
    default: "bg-gray-100",
    muted: "bg-gray-600",
    primary: "bg-blue-600",
    text: "bg-gray-800",
  },
  text: {
    color: {
      default: "text-gray-800",
      hover: "text-blue-600 hover:text-gray-700",
      muted: "text-gray-700",
      primary: "text-blue-600",
    },
    size: {
      base: "text-lg sm:text-xl",
      lg: "text-3xl sm:text-4xl",
      md: "text-2xl sm:text-3xl",
      xl: "text-4xl sm:text-6xl",
    },
  },
};

const ThemeContext = createContext(theme);
const Theme = ThemeContext.Consumer;

export const ThemeProvider = ThemeContext.Provider;

export default Theme;
