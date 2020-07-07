/** @jsx createElement */
import { AppProps } from "next/app";
import Head from "next/head";
import { createElement } from "react";

import "../css/styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="bg-gradient-metal">
    <Head>
      <title>Maurice Kleine</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="font-mono md:leading-loose m-auto px-4 pt-8 text-gray-800 md:text-xl md:w-4/5 lg:w-3/5">
      <Component {...pageProps} />
    </main>

    <footer className="font-mono m-auto pb-8 text-center text-gray-100 w-3/5">
      <p>Made with 💖</p>
    </footer>
  </div>
);

export default MyApp;
