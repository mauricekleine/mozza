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
      <nav className="fixed h-16 left-0 px-4 top-0 w-screen z-50">
        <div className={classNames(bg.default, "h-4")}></div>
        <div
          className={classNames(
            bg.white,
            "flex h-full px-4 rounded-lg text-xs sm:text-sm"
          )}
        >
          <div className="flex items-center justify-between w-full sm:mx-auto sm:w-4/6 md:w-3/5">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <NextLink href="/">
                <a className="flex items-center">
                  <Image
                    alt="Maurice Kleine"
                    height={48}
                    src="/maurice-kleine.png"
                    width={48}
                  />
                  Maurice Kleine
                </a>
              </NextLink>

              {/* <NextLink href="/" passHref>
                <Link>Home</Link>
              </NextLink>

              <NextLink href="/books" passHref>
                <Link>Posts</Link>
              </NextLink>

              <NextLink href="/books" passHref>
                <Link>Books</Link>
              </NextLink> */}
            </div>

            <div className="flex h-full items-center space-x-2 sm:space-x-3">
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
