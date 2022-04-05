import { Moon, Sun } from "phosphor-react";

import NavMd from "~/components/nav/nav-md";
import NavSm from "~/components/nav/nav-sm";
import Toggle from "~/components/toggle";
import useColorScheme from "~/utils/use-color-scheme";

const Nav = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const ColorSchemeToggle = (
    <Toggle
      isToggled={colorScheme === "dark"}
      leftLabel={<Sun className="w-4 h-4" />}
      onToggle={toggleColorScheme}
      rightLabel={<Moon className="w-4 h-4" />}
    />
  );

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-primary-900 dark:bg-black">
        <NavMd colorSchemeToggle={ColorSchemeToggle} />

        <NavSm colorSchemeToggle={ColorSchemeToggle} />
      </nav>
    </>
  );
};

export default Nav;
