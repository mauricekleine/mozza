import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            crossOrigin="anonymous"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700;900&family=Merriweather:wght@400;700&display=swap"
          />
        </Head>

        <body className="bg-primary-900 dark:bg-black">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
