import NavSm from "./nav-md";
import NavMd from "./nav-sm";

const Nav = () => (
  <>
    <nav className="bg-primary-900 fixed px-8 top-0 w-full z-50 dark:backdrop-blur-sm dark:bg-black dark:backdrop-filter dark:opacity-90 sm:px-4 sm:shadow-xl sm:text-sm">
      <NavSm />
      <NavMd />
    </nav>
  </>
);

export default Nav;
