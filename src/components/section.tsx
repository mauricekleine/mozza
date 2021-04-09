import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

const Section = ({ children }: Props) => (
  <section className={classNames("px-6 py-16 sm:px-0")}>{children}</section>
);

export default Section;
