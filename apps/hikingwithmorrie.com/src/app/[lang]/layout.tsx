import clsx from "clsx";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { Locale, getDictionary } from "@/i18n";
import { Footer } from "@/navigation/footer";
import { Navbar } from "@/navigation/navbar";

import "./layout.css";

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);

  return {
    description: dict.meta.description,
    icons: {
      apple: [{ sizes: "180x180", url: "/apple-touch-icon.png" }],
      icon: [
        { url: "/favicon.ico" },
        { sizes: "16x16", url: "/favicon-16x16.png" },
        { sizes: "32x32", url: "/favicon-32x32.png" },
      ],
    },
    title: dict.meta.title,
  };
}

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = localFont({
  src: [
    { path: "../../../public/fonts/Recoleta-Regular.otf", weight: "400" },
    { path: "../../../public/fonts/Recoleta-SemiBold.otf", weight: "600" },
  ],
  variable: "--font-serif",
});

export default async function RootLayout({
  children,
  params: { lang: locale },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(locale);

  return (
    <html
      className={clsx(
        sans.variable,
        serif.variable,
        "bg-grey-light font-sans text-lg text-black"
      )}
      lang="en"
    >
      <body>
        <Navbar dictionary={dictionary} locale={locale} />

        <main className="mt-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
