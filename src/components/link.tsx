/** @jsx createElement */
import { ReactNode, createElement } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

const Link = ({ children, href }: Props) => (
  <a
    className="py-4 text-blue-700 underline hover:text-gray-600"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default Link;
