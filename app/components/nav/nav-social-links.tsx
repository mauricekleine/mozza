import { GithubLogo, LinkedinLogo } from "phosphor-react";

import Link from "~/components/link";
import GoodreadsLogo from "~/components/svg/goodreads";

const NavSocialLinks = () => (
  <div className="flex items-center space-x-1">
    <Link
      className="px-2 py-1 sm:px-1"
      href="https://github.com/mauricekleine"
      type="nav"
    >
      <GithubLogo className="h-4 w-4 fill-white" />
    </Link>

    <Link
      className="px-2 py-1 sm:px-1"
      href="https://www.goodreads.com/mauricekleine"
      type="nav"
    >
      <GoodreadsLogo className="h-4 w-4 fill-white" />
    </Link>

    <Link
      className="px-2 py-1 sm:px-1"
      href="https://www.linkedin.com/in/mauricekleine/"
      type="nav"
    >
      <LinkedinLogo className="h-4 w-4 fill-white" />
    </Link>
  </div>
);

export default NavSocialLinks;
