import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardContainer = ({ children }: Props) => (
  <div className="space-y-4">{children}</div>
);

export default CardContainer;
