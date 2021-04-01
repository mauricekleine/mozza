import classNames from "classnames";
import Image from "next/image";

import Link from "./link";
import GitHubLogo from "./svg/github.svg";
import GoodreadsLogo from "./svg/goodreads.svg";
import LinkedInLogo from "./svg/linkedin.svg";
import ProducthuntLogo from "./svg/producthunt.svg";
import TwitterLogo from "./svg/twitter.svg";
import Theme from "./theme";

const Nav = () => (
  <Theme>
    {({ bg }) => (
      <nav className={classNames(bg.gray, "fixed left-4 right-4 top-0 z-50")}>
        <div
          className={classNames(
            bg.white,
            "text-xs mt-4 px-6 rounded-lg rounded-b-none sm:px-0 sm:text-sm"
          )}
        >
          <div className="flex h-16 justify-between mx-auto sm:w-4/6 md:w-3/5">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link className="no-underline" href="/">
                <div className="flex items-center space-x-2">
                  <Image
                    alt="Maurice Kleine"
                    height={40}
                    src="/maurice-kleine.png"
                    width={28}
                  />

                  <span className="hidden sm:inline-block">Maurice Kleine</span>
                </div>
              </Link>

              <Link className="no-underline" href="/art">
                Art
              </Link>

              <Link className="no-underline" href="/blog">
                Blog
              </Link>

              <Link className="no-underline" href="/books">
                Books
              </Link>
            </div>

            <div className="flex items-center space-x-0.5 sm:space-x-1">
              <Link className="p-1" href="https://github.com/mauricekleine">
                <GitHubLogo className="fill-current h-4 w-4" />
              </Link>

              <Link
                className="p-1"
                href="https://www.goodreads.com/mauricekleine"
              >
                <GoodreadsLogo className="fill-current h-4 w-4" />
              </Link>

              <Link
                className="p-1"
                href="https://www.linkedin.com/in/mauricekleine/"
              >
                <LinkedInLogo className="fill-current h-4 w-4" />
              </Link>

              <Link
                className="p-1"
                href="https://www.producthunt.com/@mauricekleine"
              >
                <ProducthuntLogo className="fill-current h-4 w-4" />
              </Link>

              <Link className="p-1" href="https://twitter.com/maurice_kleine">
                <TwitterLogo className="fill-current h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )}
  </Theme>
);

export default Nav;
