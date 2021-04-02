import classNames from "classnames";

import Theme from "./theme";

type Props = {
  position?: "bottom" | "top";
};

const PageCorners = ({ position = "top" }: Props) => (
  <Theme>
    {({ bg }) => (
      <>
        <div
          className={classNames(bg.default, "fixed left-4 h-4 right-4 z-50", {
            "bottom-0": position === "bottom",
            "top-0": position === "top",
          })}
        />

        <div
          className={classNames(bg.default, "fixed h-2 left-4 w-2", {
            "bottom-4": position === "bottom",
            "top-4": position === "top",
          })}
        ></div>

        <div
          className={classNames(bg.white, "fixed h-4 left-4 rounded-full w-4", {
            "bottom-4": position === "bottom",
            "top-4": position === "top",
          })}
        ></div>

        <div
          className={classNames(bg.default, "fixed h-2 right-4 w-2", {
            "bottom-4": position === "bottom",
            "top-4": position === "top",
          })}
        ></div>

        <div
          className={classNames(
            bg.white,
            "fixed h-4 right-4 rounded-full w-4",
            {
              "bottom-4": position === "bottom",
              "top-4": position === "top",
            }
          )}
        ></div>
      </>
    )}
  </Theme>
);

export default PageCorners;
