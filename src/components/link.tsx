/** @jsx createElement */
import { ReactNode, createElement } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

const Link = ({ children, href }: Props) => (
  <a
    className="bg-blue-100 block my-2 px-4 rounded-lg w-full hover:bg-blue-200"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default Link;
