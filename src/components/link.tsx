import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

const Link = ({ children, href }: Props) => (
  <a
    className="inline-block text-gray-700 bg-yellow-200 px-2 hover:text-gray-900 hover:underline rounded-lg"
    href={href}
    rel="noopener noreferrer"
    target={href.startsWith("/") ? "" : "_blank"}
  >
    {children}
  </a>
);

export default Link;
