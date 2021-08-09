import { AppProps } from "next/app";
import Head from "next/head";

import Nav from "../components/nav";

import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="antialiased bg-primary-900 dark:bg-black">
    <Head>
      <link rel="icon" href="/favicon.png" />

      <meta
        name="description"
        content="Maurice Kleine - problem solver by day, problem solver by night"
      />

      <title>Maurice Kleine</title>
    </Head>

    <Nav />

    <div className="fixed rounded-lg bg-primary-50 bottom-2 left-2 right-2 top-16 dark:hidden sm:bottom-4 sm:left-4 sm:right-4"></div>

    <main className="relative w-full p-2 mx-auto my-16 font-serif text-primary-700 dark:text-primary-200 sm:w-4/6 md:w-4/5 lg:w-3/5">
      <Component {...pageProps} />
    </main>

    <div className="fixed bottom-0 left-0 right-0 z-50 h-2 bg-primary-900 dark:hidden sm:h-4" />
  </div>
);

export default MyApp;
