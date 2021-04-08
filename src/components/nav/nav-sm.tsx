import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import useToggle from "../../utils/use-toggle";
import Link from "../link";
import MenuSVG from "../svg/menu.svg";
import XSVG from "../svg/x.svg";

import ColorSchemeToggle from "./nav-color-scheme-toggle";
import NavLinks from "./nav-links";
import NavLogo from "./nav-logo";
import NavSocialLinks from "./nav-social-links";

const NavSm = () => {
  const mobileMenuRef = useRef<HTMLDivElement>();
  const { pathname } = useRouter();

  const {
    handleToggleOff: handleMobileMenuClose,
    handleToggle: handleMobileMenuToggle,
    isToggled: isMobileMenuToggled,
  } = useToggle(mobileMenuRef);

  useEffect(() => {
    handleMobileMenuClose();
  }, [handleMobileMenuClose, pathname]);

  return (
    <div ref={mobileMenuRef}>
      <div className="flex h-16 items-center sm:hidden">
        <div className="flex flex-1">
          <button
            className="text-primary-100 focus:outline-none"
            onClick={handleMobileMenuToggle}
            type="button"
          >
            {isMobileMenuToggled ? (
              <XSVG className="h-6 w-6" />
            ) : (
              <MenuSVG className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="flex flex-1 justify-center">
          <NavLogo />
        </div>

        <div className="flex flex-1 justify-end">
          <ColorSchemeToggle />
        </div>
      </div>

      {isMobileMenuToggled && (
        <div className="flex flex-col items-center pb-3 space-y-2">
          <Link href="/" type="nav">
            Home
          </Link>

          <NavLinks />

          <NavSocialLinks />
        </div>
      )}
    </div>
  );
};

export default NavSm;
