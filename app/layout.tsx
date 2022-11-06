import { Inter, Lora } from "@next/font/google";
import classNames from "classnames";

import { Navigation } from "~/ui/navigation";

import "~/global.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={classNames(sans.variable, serif.variable)} lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

        <meta content="utf-8" name="charset" />

        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>Maurice Kleine</title>
      </head>

      <body className="relative bg-black text-slate-200">
        <Navigation />

        <main className="mt-32 mb-16">{children}</main>
      </body>
    </html>
  );
}
