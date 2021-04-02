import classNames from "classnames";
import { AppProps } from "next/app";
import Head from "next/head";

import Footer from "../components/footer";
import Nav from "../components/nav";
import Theme, { ThemeProvider, theme } from "../components/theme";

import "tailwindcss/tailwind.css";
import "../css/styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider value={theme}>
    <Theme>
      {({ bg, text }) => (
        <div className={classNames(bg.default, "p-4")}>
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
              bg.white,
              text.default,
              "font-serif leading-normal text-lg"
            )}
          >
            <Component {...pageProps} />
          </main>

          <Footer />
        </div>
      )}
    </Theme>
  </ThemeProvider>
);

export default MyApp;
