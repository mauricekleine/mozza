import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  element?: keyof JSX.IntrinsicElements;
  size?: "sm" | "md" | "lg" | "xl";
};

const SpaceContainer = ({ children, element = "div", size = "md" }: Props) => {
  const Element = element;

  return (
    <Element
      className={classNames({
        "space-y-3": size === "sm",
        "space-y-4": size === "md",
        "space-y-6": size === "lg",
        "space-y-8": size === "xl",
      })}
    >
      {children}
    </Element>
  );
};

export default SpaceContainer;
