import classNames from "classnames";
import { AppProps } from "next/app";
import Head from "next/head";

import Nav from "../components/nav";
import Theme, { ThemeProvider, theme } from "../components/theme";

import "tailwindcss/tailwind.css";
import "../css/styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider value={theme}>
    <Theme>
      {({ bg, text }) => (
        <div className={bg.default}>
          <Head>
            <link rel="icon" href="/favicon.png" />

            <meta
              name="description"
              content="Maurice Kleine - problem solver by day, problem solver by night"
            />

            <title>Maurice Kleine</title>
          </Head>

          <Nav />

          <div
            className={classNames(
              bg.white,
              "bottom-2 fixed left-2 right-2 rounded-lg top-16 sm:bottom-4 sm:left-4 sm:right-4"
            )}
          ></div>

          <main
            className={classNames(
              text.default,
              "font-serif leading-normal p-2 relative text-lg sm:p-4"
            )}
          >
            <Component {...pageProps} />
          </main>

          <div
            className={classNames(
              bg.default,
              "bottom-0 fixed left-0 h-2 right-0 z-50 sm:h-4"
            )}
          />
        </div>
      )}
    </Theme>
  </ThemeProvider>
);

export default MyApp;
