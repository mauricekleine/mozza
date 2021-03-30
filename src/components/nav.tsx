import classNames from "classnames";
import Image from "next/image";
import NextLink from "next/link";

import Link from "../components/link";

import GitHubLogo from "./svg/github.svg";
import GoodreadsLogo from "./svg/goodreads.svg";
import LinkedInLogo from "./svg/linkedin.svg";
import ProducthuntLogo from "./svg/producthunt.svg";
import TwitterLogo from "./svg/twitter.svg";
import Theme from "./theme";

const Nav = () => (
  <Theme>
    {({ bg, text }) => (
      <nav
        className={classNames(bg.default, "fixed left-4 right-4 top-0 z-50")}
      >
        <div
          className={classNames(
            bg.white,
            "text-xs mt-4 px-6 rounded-lg sm:px-0 sm:text-sm"
          )}
        >
          <div className="flex h-16 justify-between mx-auto sm:w-4/6 md:w-3/5">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <NextLink href="/">
                <a className="flex items-center space-x-2">
                  <Image
                    alt="Maurice Kleine"
                    height={40}
                    src="/maurice-kleine.png"
                    width={28}
                  />
                  <span className="hidden sm:inline-block">Maurice Kleine</span>
                </a>
              </NextLink>

              <NextLink href="/books" passHref>
                <Link>Posts</Link>
              </NextLink>

              <NextLink href="/books" passHref>
                <Link>Books</Link>
              </NextLink>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link href="https://github.com/mauricekleine">
                <GitHubLogo
                  className={classNames(text.link, "fill-current h-4 w-4")}
                />
              </Link>

              <Link href="https://www.goodreads.com/mauricekleine">
                <GoodreadsLogo
                  className={classNames(text.link, "fill-current h-4 w-4")}
                />
              </Link>

              <Link href="https://www.linkedin.com/in/mauricekleine/">
                <LinkedInLogo
                  className={classNames(text.link, "fill-current h-4 w-4")}
                />
              </Link>

              <Link href="https://www.producthunt.com/@mauricekleine">
                <ProducthuntLogo
                  className={classNames(text.link, "fill-current h-4 w-4")}
                />
              </Link>

              <Link href="https://twitter.com/maurice_kleine">
                <TwitterLogo
                  className={classNames(text.link, "fill-current h-4 w-4")}
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )}
  </Theme>
);

export default Nav;
