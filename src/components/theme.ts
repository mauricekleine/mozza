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
      muted: "text-gray-700",
      primary: "text-blue-600",
    },
    size: {
      base: "text-xl",
      lg: "text-4xl",
      md: "text-3xl",
      small: "text-lg",
      xl: "text-6xl",
    },
  },
};

const ThemeContext = createContext(theme);
const Theme = ThemeContext.Consumer;

export const ThemeProvider = ThemeContext.Provider;

export default Theme;
