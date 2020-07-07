/** @jsx createElement */
import { ReactNode, createElement } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

const Link = ({ children, href }: Props) => (
  <a
    className="block my-2 px-4 py-2 sm:py-0 rounded-lg underline hover:text-gray-600"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default Link;
