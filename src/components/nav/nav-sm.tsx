import classNames from "classnames";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef } from "react";

import useToggle from "../../utils/use-toggle";
import Link from "../link";
import MenuSVG from "../svg/menu.svg";
import XSVG from "../svg/x.svg";

import NavLinks from "./nav-links";
import NavLogo from "./nav-logo";
import NavSocialLinks from "./nav-social-links";

type Props = {
  colorSchemeToggle: ReactNode;
};

const NavSm = ({ colorSchemeToggle }: Props) => {
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
    <div className="px-8 sm:hidden" ref={mobileMenuRef}>
      <div className="flex h-16 items-center">
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

        <div className="flex flex-1 justify-end">{colorSchemeToggle}</div>
      </div>

      <div
        className={classNames("duration-300 transition-opacity", {
          "invisible opacity-0": !isMobileMenuToggled,
          "opacity-100": isMobileMenuToggled,
        })}
      >
        <div
          className={classNames("flex flex-col items-center space-y-2", {
            "h-0": !isMobileMenuToggled,
            "pb-3": isMobileMenuToggled,
          })}
        >
          <Link href="/" type="nav">
            Home
          </Link>

          <NavLinks />

          <NavSocialLinks />
        </div>
      </div>
    </div>
  );
};

export default NavSm;
