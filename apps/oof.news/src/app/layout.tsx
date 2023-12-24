import { Analytics } from "@vercel/analytics/react";
import { Metadata, Viewport } from "next";
import { Inter, Rubik_Bubbles } from "next/font/google";

import "./layout.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-family-sans",
});

const serif = Rubik_Bubbles({
  subsets: ["latin"],
  variable: "--font-family-serif",
  weight: "400",
});

export const metadata: Metadata = {
  description: "D&B events agenda, announcements and new releases",
  icons: {
    apple: [{ sizes: "180x180", url: "/apple-touch-icon.png" }],
    icon: [{ url: "/favicon.ico" }],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.oof.news/"),
  openGraph: {
    description: "D&B events agenda, announcements and new releases",
    locale: "en_US",
    siteName: "OOF",
    title: "OOF",
    type: "website",
    url: "https://www.oof.news",
  },
  title: "OOF",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#000000",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${sans.variable} ${serif.variable}`} lang="en">
      <body>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
