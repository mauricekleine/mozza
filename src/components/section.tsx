import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

const Section = ({ children }: Props) => (
  <div className={classNames("px-6 py-16 rounded-lg sm:px-0")}>
    <section className="mx-auto w-full sm:w-4/6 md:w-3/5">{children}</section>
  </div>
);

export default Section;
