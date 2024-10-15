import type { Metadata } from "next";
import { Grandstander } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

const sans = Grandstander({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  description:
    "Freelance AI Engineer based in Amsterdam, The Netherlands. I build AI applications with JavaScript and Python, for companies big and small.",
  metadataBase: new URL("https://www.mauricekleine.com"),
  openGraph: {
    description:
      "Freelance AI Engineer based in Amsterdam, The Netherlands. I build AI applications with JavaScript and Python, for companies big and small.",
    siteName: "Maurice Kleine",
    title: "Maurice Kleine - Freelance AI Engineer",
    type: "website",
    url: "https://www.mauricekleine.com",
  },
  title: "Maurice Kleine - Freelance AI Engineer",
  twitter: {
    card: "summary",
    description:
      "Freelance AI Engineer based in Amsterdam, The Netherlands. I build AI applications with JavaScript and Python, for companies big and small.",
    title: "Maurice Kleine - Freelance AI Engineer",
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden text-balance bg-white bg-[url(./noise.svg)] font-sans text-xl leading-7 tracking-wide text-black ${sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
