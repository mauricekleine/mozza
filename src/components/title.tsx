import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  outline?: "center" | "left";
};

const Title = ({ outline = "center", children }: Props) => (
  <p
    className={classNames(
      "font-serif",
      "leading-none",
      "my-12",
      "text-5xl",
      "md:text-6xl",
      {
        "text-center": outline === "center",
      }
    )}
  >
    {children}
  </p>
);

export default Title;
