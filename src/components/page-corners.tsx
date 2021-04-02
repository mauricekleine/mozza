import classNames from "classnames";

import Theme from "./theme";

type Props = {
  position?: "bottom" | "top";
};

const PageCorners = ({ position = "top" }: Props) => (
  <Theme>
    {({ bg }) => (
      <div
        className={classNames("fixed left-4 right-4", {
          "bottom-0": position === "bottom",
          "top-16": position === "top",
        })}
      >
        <div
          className={classNames("absolute flex h-4 left-0 w-4", {
            "bottom-4 items-end": position === "bottom",
          })}
        >
          <div className={classNames(bg.default, "h-1/2 w-1/2")}></div>

          <div
            className={classNames(
              bg.white,
              "absolute h-full rounded-full w-full"
            )}
          ></div>
        </div>

        <div
          className={classNames("absolute flex justify-end h-4 right-0 w-4", {
            "bottom-4 items-end": position === "bottom",
          })}
        >
          <div className={classNames(bg.default, "h-1/2 w-1/2")}></div>

          <div
            className={classNames(
              bg.white,
              "absolute h-full rounded-full w-full"
            )}
          ></div>
        </div>

        {position === "bottom" && (
          <div
            className={classNames(
              bg.default,
              "absolute bottom-0 left-0 h-4 right-0 z-50"
            )}
          />
        )}
      </div>
    )}
  </Theme>
);

export default PageCorners;
