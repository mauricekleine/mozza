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
      {({ text }) => (
        <>
          <Head>
            <link rel="icon" href="/favicon.png" />

            <meta
              name="description"
              content="Maurice Kleine - problem solver by day, problem solver by night"
            />

            <title>Maurice Kleine</title>
          </Head>

          <Nav />

          <main
            className={classNames(
              "font-serif leading-normal text-lg",
              text.default
            )}
          >
            <Component {...pageProps} />
          </main>
        </>
      )}
    </Theme>
  </ThemeProvider>
);

export default MyApp;
