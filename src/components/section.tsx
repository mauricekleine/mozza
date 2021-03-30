import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  odd?: boolean;
};

const Section = ({ children, odd }: Props) => (
  <div
    className={classNames("px-4 py-16 rounded-lg", {
      "bg-gray-100": odd,
      "bg-white": !odd,
    })}
  >
    <section className="mx-auto sm:w-4/6 md:w-3/5">{children}</section>
  </div>
);

export default Section;
