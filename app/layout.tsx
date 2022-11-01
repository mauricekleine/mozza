import { Inter } from "@next/font/google";

import Nav from "~/ui/nav";

import "~/global.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.className} lang="en">
      <head>
        <title>Hey! 🤙 | Maurice Kleine</title>
      </head>

      <body className="bg-primary-900 dark:bg-black">
        <div className="bg-primary-900 antialiased dark:bg-black">
          <Nav />

          <div className="fixed bottom-2 left-2 right-2 top-16 rounded-lg bg-primary-50 dark:hidden sm:bottom-4 sm:left-4 sm:right-4"></div>

          <main className="relative mx-auto my-16 w-full p-2 text-primary-700 dark:text-primary-200 sm:w-4/6 md:w-4/5 lg:w-3/5">
            {children}
          </main>

          <div className="fixed bottom-0 left-0 right-0 z-50 h-2 bg-primary-900 dark:hidden sm:h-4" />
        </div>
      </body>
    </html>
  );
}
