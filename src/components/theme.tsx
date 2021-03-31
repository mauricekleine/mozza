import { createContext } from "react";

export const theme = {
  bg: {
    dark: "bg-gray-200",
    darkHover: "bg-gray-100",
    gray: "bg-gray-100",
    white: "bg-white",
  },
  text: {
    active: "text-gray-900",
    dark: "text-gray-800",
    default: "text-gray-700",
    link: "text-gray-700 hover:text-gray-900",
  },
};

const ThemeContext = createContext(theme);
const Theme = ThemeContext.Consumer;

export const ThemeProvider = ThemeContext.Provider;

export default Theme;
