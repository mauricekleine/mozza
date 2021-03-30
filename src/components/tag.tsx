import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Tag = ({ children }: Props) => (
  <span className="bg-gray-200 font-sans font-medium px-1.5 py-0.5 rounded-md text-xs uppercase">
    {children}
  </span>
);

export default Tag;
