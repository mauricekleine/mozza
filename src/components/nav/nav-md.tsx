import { ReactNode } from "react";

import NavLinks from "./nav-links";
import NavLogo from "./nav-logo";
import NavSocialLinks from "./nav-social-links";

type Props = {
  colorSchemeToggle: ReactNode;
};

const NavMd = ({ colorSchemeToggle }: Props) => (
  <div className="hidden sm:block">
    <div className="flex h-16 items-center justify-between mx-auto px-2 sm:w-4/6 md:w-4/5 lg:w-3/5">
      <div className="flex items-center space-x-1 -ml-1">
        <NavLogo />

        <NavLinks />
      </div>

      <div className="flex space-x-2">
        <NavSocialLinks />

        {colorSchemeToggle}
      </div>
    </div>
  </div>
);

export default NavMd;
