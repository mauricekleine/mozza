import classNames from "classnames";

import Link from "./link";
import GitHubLogo from "./svg/github.svg";
import GoodreadsLogo from "./svg/goodreads.svg";
import LinkedInLogo from "./svg/linkedin.svg";
import ProducthuntLogo from "./svg/producthunt.svg";
import TwitterLogo from "./svg/twitter.svg";

const Nav = () => (
  <>
    <nav
      className={classNames(
        "bg-primary-900 fixed left-4 right-4 text-xs top-0 z-50 sm:text-sm"
      )}
    >
      <div
        className={classNames(
          "flex h-16 justify-between mx-auto sm:w-4/6 md:w-3/5"
        )}
      >
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Link href="/" type="nav">
            <div className="flex items-center space-x-2">
              <img
                alt="Maurice Kleine"
                className="bg-white object-contain p-0.5 rounded-full h-10 w-10"
                src="/maurice-kleine.png"
              />

              <span className="hidden sm:inline-block">Maurice Kleine</span>
            </div>
          </Link>

          <Link href="/art" type="nav">
            Art
          </Link>

          <Link href="/blog" type="nav">
            Blog
          </Link>

          <Link href="/books" type="nav">
            Books
          </Link>
        </div>

        <div className="flex items-center space-x-0.5 sm:space-x-1">
          <Link
            className="p-1"
            href="https://github.com/mauricekleine"
            type="nav"
          >
            <GitHubLogo className="fill-current h-4 w-4" />
          </Link>

          <Link
            className="p-1"
            href="https://www.goodreads.com/mauricekleine"
            type="nav"
          >
            <GoodreadsLogo className="fill-current h-4 w-4" />
          </Link>

          <Link
            className="p-1"
            href="https://www.linkedin.com/in/mauricekleine/"
            type="nav"
          >
            <LinkedInLogo className="fill-current h-4 w-4" />
          </Link>

          <Link
            className="p-1"
            href="https://www.producthunt.com/@mauricekleine"
            type="nav"
          >
            <ProducthuntLogo className="fill-current h-4 w-4" />
          </Link>

          <Link
            className="p-1"
            href="https://twitter.com/maurice_kleine"
            type="nav"
          >
            <TwitterLogo className="fill-current h-4 w-4" />
          </Link>
        </div>
      </div>
    </nav>
  </>
);

export default Nav;
