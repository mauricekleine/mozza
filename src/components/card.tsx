import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => (
  <div className="border px-4 py-6 space-y-2 rounded">{children}</div>
);

export default Card;
