import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

const Link = ({ children, href }: Props) => (
  <a
    className="inline-block text-gray-800 underline hover:text-gray-600"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
);

export default Link;
