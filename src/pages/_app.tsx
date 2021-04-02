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

          <div className="bg-white fixed left-4 top-16 right-4 bottom-4 rounded-lg"></div>

          <main
            className={classNames(
              text.default,
              "font-serif leading-normal p-4 relative text-lg"
            )}
          >
            <Component {...pageProps} />
          </main>

          <div
            className={classNames(
              bg.default,
              "fixed bottom-0 left-0 h-4 right-0 z-50"
            )}
          />
        </div>
      )}
    </Theme>
  </ThemeProvider>
);

export default MyApp;
