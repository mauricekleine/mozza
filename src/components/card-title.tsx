import { ReactNode } from "react";

import Link from "./link";

type Props = {
  children: ReactNode;
  href: HTMLAnchorElement["href"];
};

const CardTitle = ({ children, href }: Props) => (
  <Link className="font-bold font-sans text-xl" href={href}>
    <p>{children}</p>
  </Link>
);

export default CardTitle;
