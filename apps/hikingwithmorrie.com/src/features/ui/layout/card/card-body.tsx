import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function CardBody({ children }: Props) {
  return <div className="p-4 sm:px-6">{children}</div>;
}
