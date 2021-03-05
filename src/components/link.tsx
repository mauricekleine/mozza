import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

const Link = ({ children, href }: Props) => (
  <a
    className="text-yellow-500 underline hover:no-underline"
    href={href}
    rel="noopener noreferrer"
    target={href.startsWith("/") ? "" : "_blank"}
  >
    {children}
  </a>
);

export default Link;
