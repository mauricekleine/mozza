import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Tag = ({ children }: Props) => (
  <span className="bg-gray-200 font-sans font-medium mr-2 px-1.5 py-0.5 rounded-md text-xs uppercase whitespace-nowrap">
    {children}
  </span>
);

export default Tag;
