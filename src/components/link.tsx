import classNames from "classnames";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLAnchorElement>["className"];
  href: string;
  type?: "default" | "nav";
};

const Link = ({ children, href, className, type = "default" }: Props) => {
  const router = useRouter();
  const isActiveRoute = router.route.includes(href);
  const isInternalLink = href.startsWith("/");

  const sharedClassnames = classNames(
    "leading-normal dark:text-white",
    {
      "text-sm text-white": type == "nav",
      "underline hover:no-underline": type !== "nav",
    },
    className
  );

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a
          className={classNames(sharedClassnames, {
            "font-bold": isActiveRoute,
          })}
        >
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a
      className={sharedClassnames}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Link;
