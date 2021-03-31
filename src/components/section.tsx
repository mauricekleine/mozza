import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  type?: "default" | "hero";
};

const Section = ({ children, type = "default" }: Props) => (
  <div
    className={classNames("px-6 py-16 rounded-lg sm:px-0", {
      "bg-gray-100": type === "default",
      "bg-white": type === "hero",
    })}
  >
    <section className="mx-auto w-full sm:w-4/6 md:w-3/5">{children}</section>
  </div>
);

export default Section;
