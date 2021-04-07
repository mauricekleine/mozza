import { AppProps } from "next/app";
import Head from "next/head";

import Nav from "../components/nav";

import "tailwindcss/tailwind.css";
import "../css/styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="antialiased bg-primary-900 text-primary-700">
    <Head>
      <link rel="icon" href="/favicon.png" />

      <meta
        name="description"
        content="Maurice Kleine - problem solver by day, problem solver by night"
      />

      <title>Maurice Kleine</title>
    </Head>

    <Nav />

    <div className="bg-primary-50 bottom-2 fixed left-2 right-2 rounded-lg top-16 sm:bottom-4 sm:left-4 sm:right-4"></div>

    <main className="font-serif leading-relaxed p-2 relative sm:p-4">
      <Component {...pageProps} />
    </main>

    <div className="bg-primary-900 bottom-0 fixed left-0 h-2 right-0 z-50 sm:h-4" />
  </div>
);

export default MyApp;
