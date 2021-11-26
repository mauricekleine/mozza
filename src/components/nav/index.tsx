import useColorScheme from "../../utils/use-color-scheme";
import MoonIcon from "../svg/moon";
import SunIcon from "../svg/sun";
import Toggle from "../toggle";

import NavMd from "./nav-md";
import NavSm from "./nav-sm";

const Nav = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const ColorSchemeToggle = (
    <Toggle
      isToggled={colorScheme === "dark"}
      leftLabel={<SunIcon className="w-4 h-4" />}
      onToggle={toggleColorScheme}
      rightLabel={<MoonIcon className="w-4 h-4" />}
    />
  );

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-primary-900 dark:backdrop-blur-sm dark:bg-black dark:backdrop-filter dark:opacity-90">
        <NavMd colorSchemeToggle={ColorSchemeToggle} />

        <NavSm colorSchemeToggle={ColorSchemeToggle} />
      </nav>
    </>
  );
};

export default Nav;
