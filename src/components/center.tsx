import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

const Center = ({ children }: Props) => (
  <div className="flex flex-col items-center text-center">{children}</div>
);

export default Center;
