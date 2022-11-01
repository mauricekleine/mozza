"use client";

import classNames from "classnames";
import type { ReactNode } from "react";
import { useRef } from "react";

import { List, X } from "~/ui/icon";
import useToggle from "~/utils/use-toggle";

import { Logo } from "./logo";
import { SocialLinks } from "./social-links";

type Props = {
  colorSchemeToggle: ReactNode;
};

export function MobileNavigation({ colorSchemeToggle }: Props) {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const {
    handleToggle: handleMobileMenuToggle,
    isToggled: isMobileMenuToggled,
  } = useToggle(mobileMenuRef);

  return (
    <div className="px-8 sm:hidden" ref={mobileMenuRef}>
      <div className="flex h-16 items-center">
        <div className="flex flex-1">
          <button
            className="-ml-1 p-1 text-primary-100 focus:outline-none"
            onClick={handleMobileMenuToggle}
            type="button"
          >
            {isMobileMenuToggled ? (
              <X className="h-6 w-6" />
            ) : (
              <List className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="flex flex-1 justify-center">
          <Logo />
        </div>

        <div className="flex flex-1 justify-end">{colorSchemeToggle}</div>
      </div>

      <div
        className={classNames("transition-opacity duration-300", {
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
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
