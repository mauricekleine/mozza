import classNames from "classnames";
import { List, X } from "phosphor-react";
import { ReactNode, useRef } from "react";

import NavLogo from "~/components/nav/nav-logo";
import NavSocialLinks from "~/components/nav/nav-social-links";
import useToggle from "~/utils/use-toggle";

type Props = {
  colorSchemeToggle: ReactNode;
};

const NavSm = ({ colorSchemeToggle }: Props) => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const {
    handleToggleOff: handleMobileMenuClose,
    handleToggle: handleMobileMenuToggle,
    isToggled: isMobileMenuToggled,
  } = useToggle(mobileMenuRef);

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
              <X className="w-6 h-6" />
            ) : (
              <List className="w-6 h-6" />
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
