/** @jsx createElement */
import classNames from "classnames";
import { ReactNode, createElement } from "react";

type Props = {
  children: ReactNode;
};

const HeadingThree = ({ children }: Props) => (
  <p className={classNames("border-b-2")}>{children}</p>
);

export default HeadingThree;
