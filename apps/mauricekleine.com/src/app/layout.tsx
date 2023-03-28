import { clsx } from "clsx";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";

import { Navigation } from "@mk/navigation";
import { Footer, ToastProvider, ToastViewport } from "@mk/ui";

import "./layout.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = localFont({
  src: [
    { path: "../../public/fonts/Recoleta-Regular.otf", weight: "400" },
    { path: "../../public/fonts/Recoleta-SemiBold.otf", weight: "600" },
    { path: "../../public/fonts/Recoleta-Bold.otf", weight: "700" },
  ],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  colorScheme: "light",
  icons: {
    apple: [{ sizes: "180x180", url: "/apple-touch-icon.png" }],
    icon: [
      { url: "/favicon.ico" },
      { sizes: "16x16", url: "/favicon-16x16.png" },
      { sizes: "32x32", url: "/favicon-32x32.png" },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  title: "Maurice Kleine - Freelance Full-Stack Engineer",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={clsx(sans.variable, serif.variable, "bg-black text-slate-200")}
      lang="en"
    >
      <head>
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" />
      </head>

      <body>
        <ToastProvider>
          <Navigation />

          <main>{children}</main>

          <ToastViewport />
        </ToastProvider>

        <Footer />
      </body>
    </html>
  );
}
