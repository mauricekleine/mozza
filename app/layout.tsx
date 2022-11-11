"use client";

import { Inter, Vollkorn } from "@next/font/google";
import classNames from "classnames";
import { MotionConfig } from "framer-motion";
import Script from "next/script";

import { Footer, ToastProvider, ToastViewport } from "~/design-system";

import { Navigation } from "~/navigation";

import "./global.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Vollkorn({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={classNames(
        sans.variable,
        serif.variable,
        "bg-black text-slate-200"
      )}
      lang="en"
    >
      <head>
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />

        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />

        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <link rel="manifest" href="/site.webmanifest" />

        <meta content="utf-8" name="charset" />

        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" />

        <title>Maurice Kleine</title>
      </head>

      <body>
        <MotionConfig reducedMotion="user">
          <ToastProvider>
            <Navigation />

            <main className="mt-32 mb-16">{children}</main>

            <ToastViewport />
          </ToastProvider>
        </MotionConfig>

        <Footer />
      </body>
    </html>
  );
}
