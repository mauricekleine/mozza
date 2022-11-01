import type { ReactNode } from "react";

import { Logo } from "./logo";
import { SocialLinks } from "./social-links";

type Props = {
  colorSchemeToggle: ReactNode;
};

export function DesktopNavigation({ colorSchemeToggle }: Props) {
  return (
    <div className="hidden sm:block">
      <div className="mx-auto flex h-16 items-center justify-between px-2 sm:w-4/6 md:w-4/5 lg:w-3/5">
        <div className="-ml-1 flex items-center space-x-1">
          <Logo />
        </div>

        <div className="flex space-x-2">
          <SocialLinks />

          {colorSchemeToggle}
        </div>
      </div>
    </div>
  );
}
