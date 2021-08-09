import Link from "../link";
import GitHubLogo from "../svg/github.svg";
import GoodreadsLogo from "../svg/goodreads.svg";
import LinkedInLogo from "../svg/linkedin.svg";
import ProducthuntLogo from "../svg/producthunt.svg";

const NavSocialLinks = () => (
  <div className="flex items-center space-x-1">
    <Link
      className="px-2 py-1 sm:px-1"
      href="https://github.com/mauricekleine"
      type="nav"
    >
      <GitHubLogo className="w-4 h-4 fill-current" />
    </Link>

    <Link
      className="px-2 py-1 sm:px-1"
      href="https://www.goodreads.com/mauricekleine"
      type="nav"
    >
      <GoodreadsLogo className="w-4 h-4 fill-current" />
    </Link>

    <Link
      className="px-2 py-1 sm:px-1"
      href="https://www.linkedin.com/in/mauricekleine/"
      type="nav"
    >
      <LinkedInLogo className="w-4 h-4 fill-current" />
    </Link>

    <Link
      className="px-2 py-1 sm:px-1"
      href="https://www.producthunt.com/@mauricekleine"
      type="nav"
    >
      <ProducthuntLogo className="w-4 h-4 fill-current" />
    </Link>
  </div>
);

export default NavSocialLinks;
