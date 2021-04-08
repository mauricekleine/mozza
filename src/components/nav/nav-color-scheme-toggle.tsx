import useDarkMode from "../../utils/use-color-scheme";
import MoonSVG from "../svg/moon.svg";
import SunSVG from "../svg/sun.svg";
import Toggle from "../toggle";

const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useDarkMode();

  return (
    <Toggle
      isToggled={colorScheme === "dark"}
      leftLabel={<SunSVG className="h-4 w-4" />}
      onToggle={toggleColorScheme}
      rightLabel={<MoonSVG className="h-4 w-4" />}
    />
  );
};

export default ColorSchemeToggle;
