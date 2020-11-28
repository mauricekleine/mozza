import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body className="white p-4">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
