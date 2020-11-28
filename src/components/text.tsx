import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Text = ({ children }: Props) => <p className="mb-4">{children}</p>;

export default Text;
