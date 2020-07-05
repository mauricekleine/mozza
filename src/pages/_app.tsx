/** @jsx createElement */
import { AppProps } from "next/app";
import Head from "next/head";
import { createElement } from "react";

import "../css/styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="bg-gray-100">
    <Head>
      <title>Maurice Kleine</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="font-mono leading-loose m-auto pt-8 text-gray-800 text-xl md:w-4/5 lg:w-3/5">
      <Component {...pageProps} />
    </main>

    <footer className="font-mono m-auto py-4 text-center w-3/5">
      <p>Made with love 💖 in Amsterdam</p>
    </footer>
  </div>
);

export default MyApp;
