/** @jsx createElement */
import Document, { Head, Html, Main, NextScript } from "next/document";
import { createElement } from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
