import Link from "../link";
import GitHubLogo from "../svg/github.svg";
import GoodreadsLogo from "../svg/goodreads.svg";
import LinkedInLogo from "../svg/linkedin.svg";
import ProducthuntLogo from "../svg/producthunt.svg";
import TwitterLogo from "../svg/twitter.svg";

const NavSocialLinks = () => (
  <div className="flex items-center space-x-1">
    <Link
      className="p-1.5 sm:p-1"
      href="https://github.com/mauricekleine"
      type="nav"
    >
      <GitHubLogo className="fill-current h-4 w-4" />
    </Link>

    <Link
      className="p-1.5 sm:p-1"
      href="https://www.goodreads.com/mauricekleine"
      type="nav"
    >
      <GoodreadsLogo className="fill-current h-4 w-4" />
    </Link>

    <Link
      className="p-1.5 sm:p-1"
      href="https://www.linkedin.com/in/mauricekleine/"
      type="nav"
    >
      <LinkedInLogo className="fill-current h-4 w-4" />
    </Link>

    <Link
      className="p-1.5 sm:p-1"
      href="https://www.producthunt.com/@mauricekleine"
      type="nav"
    >
      <ProducthuntLogo className="fill-current h-4 w-4" />
    </Link>

    <Link
      className="p-1.5 sm:p-1"
      href="https://twitter.com/maurice_kleine"
      type="nav"
    >
      <TwitterLogo className="fill-current h-4 w-4" />
    </Link>
  </div>
);

export default NavSocialLinks;
