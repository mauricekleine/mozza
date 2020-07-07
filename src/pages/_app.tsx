/** @jsx createElement */
import classNames from "classnames";
import { AppProps } from "next/app";
import Head from "next/head";
import { createElement } from "react";

import Link from "../components/link";
import Theme, { ThemeProvider, theme } from "../components/theme";

import "../css/styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider value={theme}>
    <Theme>
      {({ bg, text }) => (
        <div
          className={classNames(
            "font-mono",
            "leading-normal",
            "sm:leading-relaxed",
            bg.default,
            text.color.default
          )}
        >
          <Head>
            <title>Maurice Kleine</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main
            className={classNames(
              "m-auto",
              "px-4 pt-10",
              text.size.small,
              `sm:${text.size.base}`,
              "md:w-4/5 lg:w-3/5 xl:w-2/5"
            )}
          >
            <Component {...pageProps} />
          </main>

          <footer className="pb-8 text-center">
            <p>
              Made with 💖 | 😺{" "}
              <Link href="https://github.com/mauricekleine/mk-website">
                source
              </Link>
            </p>
          </footer>
        </div>
      )}
    </Theme>
  </ThemeProvider>
);

export default MyApp;
