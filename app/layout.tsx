import { sans } from "~/ui/fonts";
import { Navigation } from "~/ui/navigation";

import "~/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={sans} lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />

        <title>Maurice Kleine</title>
      </head>

      <body className="bg-primary-900 dark:bg-black">
        <div className="bg-primary-900 antialiased dark:bg-black">
          <Navigation />

          <div className="fixed bottom-2 left-2 right-2 top-16 rounded-lg bg-primary-50 dark:hidden sm:bottom-4 sm:left-4 sm:right-4"></div>

          <main className="relative mx-auto mt-32 mb-16 w-full px-8 sm:px-0 text-primary-700 dark:text-primary-200 sm:w-4/6 md:w-4/5 lg:w-3/5">
            {children}
          </main>

          <div className="fixed bottom-0 left-0 right-0 z-50 h-2 bg-primary-900 dark:hidden sm:h-4" />
        </div>
      </body>
    </html>
  );
}
