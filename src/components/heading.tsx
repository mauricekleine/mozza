/** @jsx createElement */
import { ReactNode, createElement } from "react";

type Props = {
  children: ReactNode;
};

const HeadingOne = ({ children }: Props) => (
  <p className="text-3xl">{children}</p>
);

export default HeadingOne;
