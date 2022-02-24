import classNames from "classnames";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useRef } from "react";

import useToggle from "../../utils/use-toggle";
import MenuIcon from "../svg/menu";
import XIcon from "../svg/x";

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
      <div className="flex items-center h-16">
        <div className="flex flex-1">
          <button
            className="p-1 -ml-1 text-primary-100 focus:outline-none"
            onClick={handleMobileMenuToggle}
            type="button"
          >
            {isMobileMenuToggled ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className="flex justify-center flex-1">
          <NavLogo />
        </div>

        <div className="flex justify-end flex-1">{colorSchemeToggle}</div>
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
          <NavSocialLinks />
        </div>
      </div>
    </div>
  );
};

export default NavSm;
