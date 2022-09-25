import classNames from "classnames";
import type { ReactNode } from "react";

type Props = {
  isToggled: boolean;
  leftLabel: ReactNode;
  onToggle: () => void;
  rightLabel: ReactNode;
};

const Toggle = ({ isToggled, leftLabel, onToggle, rightLabel }: Props) => (
  <>
    <div
      className="flex h-6 w-12 cursor-pointer items-center rounded-full bg-primary-700 px-0.5 text-primary-100 dark:bg-primary-800"
      onClick={onToggle}
    >
      <div
        className={classNames(
          "h-4 w-4 rounded-full bg-primary-100 opacity-90 transition-transform ease-in-out",
          {
            "translate-x-1": !isToggled,
            "translate-x-6": isToggled,
          }
        )}
      ></div>

      <div
        className={classNames({
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
