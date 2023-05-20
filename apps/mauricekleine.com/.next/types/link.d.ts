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

  type StaticRoutes = `/` | `/camino`;
  type DynamicRoutes<T extends string = string> = never;

  type RouteImpl<T> =
    | StaticRoutes
    | `${StaticRoutes}${SearchOrHash}`
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

declare module "next/navigation" {
  export * from "next/dist/client/components/navigation";

  import type {
    NavigateOptions,
    AppRouterInstance as OriginalAppRouterInstance,
  } from "next/dist/shared/lib/app-router-context";
  interface AppRouterInstance extends OriginalAppRouterInstance {
    /**
     * Navigate to the provided href.
     * Pushes a new history entry.
     */
    push<RouteType>(
      href: __next_route_internal_types__.RouteImpl<RouteType>,
      options?: NavigateOptions
    ): void;
    /**
     * Navigate to the provided href.
     * Replaces the current history entry.
     */
    replace<RouteType>(
      href: __next_route_internal_types__.RouteImpl<RouteType>,
      options?: NavigateOptions
    ): void;
    /**
     * Prefetch the provided href.
     */
    prefetch<RouteType>(
      href: __next_route_internal_types__.RouteImpl<RouteType>
    ): void;
  }

  export declare function useRouter(): AppRouterInstance;
}
