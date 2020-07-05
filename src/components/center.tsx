/** @jsx createElement */
import { ReactNode, createElement } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

const Center = ({ children }: Props) => (
  <div className="flex flex-col items-center mb-8 text-center">{children}</div>
);

export default Center;
