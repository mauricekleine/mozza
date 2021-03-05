import { AppProps } from "next/app";
import Head from "next/head";

import "../css/styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Maurice Kleine</title>
      <link rel="icon" href="/favicon.png" />
      <meta
        name="description"
        content="Maurice Kleine - problem solver by day, problem solver by night"
      />
    </Head>

    <main className="leading-normal text-base text-gray-800">
      <Component {...pageProps} />
    </main>
  </>
);

export default MyApp;
