import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardContent = ({ children }: Props) => (
  <div className="px-6 py-4">{children}</div>
);

export default CardContent;
