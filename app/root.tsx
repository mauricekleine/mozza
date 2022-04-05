import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "~/app.css";
import Nav from "~/components/nav";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    crossOrigin: "anonymous",
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700;900&family=Merriweather:wght@400;700&display=swap",
  },
  {
    rel: "icon",
    href: "/favicon.png",
  },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  description: "",
  title: "Maurice Kleine",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />

        <Links />
      </head>

      <body className="bg-primary-900 dark:bg-black">
        <div className="antialiased bg-primary-900 dark:bg-black">
          <Nav />

          <div className="fixed rounded-lg bg-primary-50 bottom-2 left-2 right-2 top-16 dark:hidden sm:bottom-4 sm:left-4 sm:right-4"></div>

          <main className="relative w-full p-2 mx-auto my-16 font-serif text-primary-700 dark:text-primary-200 sm:w-4/6 md:w-4/5 lg:w-3/5">
            <Outlet />
          </main>

          <div className="fixed bottom-0 left-0 right-0 z-50 h-2 bg-primary-900 dark:hidden sm:h-4" />
        </div>

        <ScrollRestoration />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}
