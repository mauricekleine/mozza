import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

import "./layout.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-family-sans",
});

const serif = localFont({
  src: [{ path: "../../public/fonts/Recoleta-Bold.otf", weight: "700" }],
  variable: "--font-family-serif",
});

export const metadata: Metadata = {
  colorScheme: "light",
  description:
    "Freelance Software Engineer based in Amsterdam, The Netherlands. I build web applications with React, TypeScript, Node.js, and GraphQL.",
  icons: {
    apple: [{ sizes: "180x180", url: "/apple-touch-icon.png" }],
    icon: [
      { url: "/favicon.ico" },
      { sizes: "16x16", url: "/favicon-16x16.png" },
      { sizes: "32x32", url: "/favicon-32x32.png" },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://www.mauricekleine.com/"),
  openGraph: {
    description:
      "Freelance Software Engineer based in Amsterdam, The Netherlands. I build web applications with React, TypeScript, Node.js, and GraphQL.",
    locale: "en_US",
    siteName: "Maurice Kleine",
    title: "Maurice Kleine - Freelance Software Engineer",
    type: "website",
    url: "https://www.mauricekleine.com",
  },
  themeColor: "#ffffff",
  title: "Maurice Kleine - Freelance Software Engineer",
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
