// Type definitions for Next.js routes

/**
 * Internal types used by the Next.js router and Link component.
 * These types are not meant to be used directly.
 * @internal
 */
declare namespace __next_route_internal_types__ {
  type SearchOrHash = `?${string}` | `#${string}`;

  type Suffix = "" | SearchOrHash;

  type SafeSlug<S extends string> = S extends `${string}/${string}`
    ? never
    : S extends `${string}${SearchOrHash}`
    ? never
    : S extends ""
    ? never
    : S;

  type CatchAllSlug<S extends string> = S extends `${string}${SearchOrHash}`
    ? never
    : S extends ""
    ? never
    : S;

  type OptionalCatchAllSlug<S extends string> =
    S extends `${string}${SearchOrHash}` ? never : S;

  type StaticRoutes = `/../middleware`;
  type DynamicRoutes<T extends string = string> =
    | `/${SafeSlug<T>}`
    | `/${SafeSlug<T>}/about`
    | `/${SafeSlug<T>}/blog`
    | `/${SafeSlug<T>}/contact`
    | `/${SafeSlug<T>}/hikes`;

  type RouteImpl<T> =
    | StaticRoutes
    | `${StaticRoutes}${Suffix}`
    | (T extends `${DynamicRoutes<infer _>}${Suffix}` ? T : never);
}

declare module "next" {
  export { default } from "next/types";
  export * from "next/types";

  export type Route<T extends string = string> =
    __next_route_internal_types__.RouteImpl<T>;
}

declare module "next/link" {
  import type { LinkProps as OriginalLinkProps } from "next/dist/client/link";
  import type { AnchorHTMLAttributes } from "react";
  import type { UrlObject } from "url";

  type LinkRestProps = Omit<
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof OriginalLinkProps> &
      OriginalLinkProps,
    "href"
  >;

  export type LinkProps<T> = LinkRestProps & {
    /**
     * The path or URL to navigate to. This is the only required prop. It can also be an object.
     * @see https://nextjs.org/docs/api-reference/next/link
     */
    href: __next_route_internal_types__.RouteImpl<T> | UrlObject;
  };

  export default function Link<RouteType>(
    props: LinkProps<RouteType>
  ): JSX.Element;
}
