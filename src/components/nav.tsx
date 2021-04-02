import classNames from "classnames";
import Image from "next/image";

import Link from "./link";
import PageCorners from "./page-corners";
import GitHubLogo from "./svg/github.svg";
import GoodreadsLogo from "./svg/goodreads.svg";
import LinkedInLogo from "./svg/linkedin.svg";
import ProducthuntLogo from "./svg/producthunt.svg";
import TwitterLogo from "./svg/twitter.svg";
import Theme from "./theme";

const Nav = () => (
  <Theme>
    {({ bg }) => (
      <>
        <nav
          className={classNames(
            "fixed left-4 px-6 right-4 text-xs z-50 sm:px-0 sm:text-sm"
          )}
        >
          <PageCorners />

          <div
            className={classNames(
              bg.white,
              "flex h-16 justify-between mx-auto sm:w-4/6 md:w-3/5"
            )}
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link href="/" type="nav">
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
        </nav>
      </>
    )}
  </Theme>
);

export default Nav;
