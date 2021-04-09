import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  isToggled: boolean;
  leftLabel: ReactNode;
  onToggle: () => void;
  rightLabel: ReactNode;
};

const Toggle = ({ isToggled, leftLabel, onToggle, rightLabel }: Props) => (
  <>
    <div
      className="bg-primary-700 cursor-pointer flex h-6 items-center px-0.5 rounded-full text-primary-100 w-12 dark:bg-primary-800"
      onClick={onToggle}
    >
      <div
        className={classNames(
          "bg-primary-100 ease-in-out h-4 opacity-90 rounded-full transform transition-transform w-4",
          {
            "translate-x-1": !isToggled,
            "translate-x-6": isToggled,
          }
        )}
      ></div>

      <div
        className={classNames("transform", {
          "-translate-x-3": isToggled,
          "translate-x-2": !isToggled,
        })}
      >
        {isToggled ? leftLabel : rightLabel}
      </div>
    </div>
  </>
);

export default Toggle;
