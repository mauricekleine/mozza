import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import type { HTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: HTMLAttributes<HTMLAnchorElement>["className"];
  href: string;
  type?: "default" | "nav";
};

const Link = ({ children, href, className, type = "default" }: Props) => {
  const isInternalLink = !href.startsWith("http");

  const sharedClassnames = classNames(
    "leading-normal",
    {
      "px-1 text-sm text-white": type == "nav",
      "underline hover:no-underline": type !== "nav",
    },
    className
  );

  if (isInternalLink) {
    return (
      <NavLink
        className={({ isActive }) =>
          classNames(sharedClassnames, {
            "font-bold": isActive,
          })
        }
        to={href}
      >
        {children}
      </NavLink>
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
