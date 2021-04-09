import useColorScheme from "../../utils/use-color-scheme";
import MoonSVG from "../svg/moon.svg";
import SunSVG from "../svg/sun.svg";
import Toggle from "../toggle";

import NavMd from "./nav-md";
import NavSm from "./nav-sm";

const Nav = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const ColorSchemeToggle = (
    <Toggle
      isToggled={colorScheme === "dark"}
      leftLabel={<SunSVG className="h-4 w-4" />}
      onToggle={toggleColorScheme}
      rightLabel={<MoonSVG className="h-4 w-4" />}
    />
  );

  return (
    <>
      <nav className="bg-primary-900 fixed top-0 w-full z-50 dark:backdrop-blur-sm dark:bg-black dark:backdrop-filter dark:opacity-90">
        <NavMd colorSchemeToggle={ColorSchemeToggle} />
        <NavSm colorSchemeToggle={ColorSchemeToggle} />
      </nav>
    </>
  );
};

export default Nav;
