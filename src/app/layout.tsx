import type { Metadata } from "next";
import { Grandstander } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";
import { Button } from "~/ui/button";
import { GithubLogo, LinkedinLogo, PaperPlaneTilt } from "~/ui/icons";
import { MailtoLink } from "~/ui/mailto-link";
import { H2 } from "~/ui/typography";

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
        className={`relative space-y-8 overflow-x-hidden text-balance bg-white bg-[url(./noise.svg)] font-sans text-xl leading-7 tracking-wide text-black ${sans.variable}`}
      >
        {/* <header className="sticky top-4 z-50">
          <nav className="shadow-brutal-sm border-black border-2 hover:shadow-brutal-xs transition-all w-fit mx-auto rounded-md hover:bg-white/90 bg-white/70 backdrop-blur-md py-1 px-1 flex items-center text-base justify-between">
            <Link href="/">
              <Image className="size-10 md:size-12" src="/logo-inverted.svg" alt="Maurice Kleine" width={48} height={48} />
            </Link>

            <div className="flex divide-x divide-black items-center">
              <Link className="px-2 md:px-4 hover:underline" href="#portfolio">Portfolio</Link>
              <Link className="px-2 md:px-4 hover:underline" href="#services">Services</Link>
              <Link className="px-2 md:px-4 hover:underline" href="#pricing">Pricing</Link>
              <Link className="px-2 md:px-4 hover:underline" href="#contact">Contact</Link>
            </div>
          </nav>
        </header> */}

        <main>{children}</main>

        <footer className="space-y-16 border-t-4 border-dashed border-black bg-red-600 p-8 text-center text-yellow-300 md:p-12">
          <div className="mx-auto max-w-4xl space-y-8">
            <H2>You won&apos;t regret it!</H2>

            <p>
              For a limited time only, we are offering a free consultation to
              new clients. Contact us today to learn more about our services and
              how we can help you transform your ideas into reality!
            </p>

            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Button
                as="a"
                href="https://www.linkedin.com/in/mauricekleine/"
                leadingIcon={
                  <LinkedinLogo
                    className="size-5 transition-transform duration-200"
                    weight="bold"
                  />
                }
                target="_blank"
              >
                LinkedIn
              </Button>

              <Button
                as="a"
                href="https://github.com/mauricekleine/"
                leadingIcon={
                  <GithubLogo
                    className="size-5 transition-transform duration-200"
                    weight="bold"
                  />
                }
                target="_blank"
              >
                Github
              </Button>

              <MailtoLink
                leadingIcon={
                  <PaperPlaneTilt
                    className="size-5 transition-transform duration-200"
                    weight="bold"
                  />
                }
              >
                Email
              </MailtoLink>
            </div>
          </div>

          <div className="text-base">
            <p>Maurice Kleine</p>

            <p>Amsterdam, The Netherlands</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
