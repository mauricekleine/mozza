import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

import Link from "../link";
import GoodreadsLogo from "../svg/goodreads";

const NavSocialLinks = () => (
  <div className="flex items-center space-x-1">
    <Link
      className="px-2 py-1 sm:px-1"
      href="https://github.com/mauricekleine"
      type="nav"
    >
      <GithubLogo className="w-4 h-4 fill-white" />
    </Link>

    <Link
      className="px-2 py-1 sm:px-1"
      href="https://www.goodreads.com/mauricekleine"
      type="nav"
    >
      <GoodreadsLogo className="w-4 h-4 fill-white" />
    </Link>

    <Link
      className="px-2 py-1 sm:px-1"
      href="https://www.linkedin.com/in/mauricekleine/"
      type="nav"
    >
      <LinkedinLogo className="w-4 h-4 fill-white" />
    </Link>

    <Link
      className="px-2 py-1 sm:px-1"
      href="https://www.twitter.com/mkdotcodes/"
      type="nav"
    >
      <TwitterLogo className="w-4 h-4 fill-white" />
    </Link>
  </div>
);

export default NavSocialLinks;
