import { Stars } from "~/stars";
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

      <body className="relative bg-black">
        <Navigation />

        <main className="relative mx-auto mt-32 mb-16 w-full px-8 text-primary-200 sm:w-4/6 sm:px-0 md:w-4/5 lg:w-3/5">
          {children}
        </main>
      </body>
    </html>
  );
}
