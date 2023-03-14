import { clsx } from "clsx";
import { ReactNode } from "react";

import { CircleNotch, Icon } from "../icon";
import { Stack } from "../layout";

import { ButtonSize } from "./button";

export type Props = {
  children: ReactNode;
  iconLeft?: Icon;
  iconRight?: Icon;
  isLoading?: boolean;
  size?: ButtonSize;
};

export function ButtonContent({
  children,
  iconLeft,
  iconRight,
  isLoading,
  size,
}: Props) {
  const IconLeft = isLoading ? CircleNotch : iconLeft;
  const IconRight = iconRight;

  return (
    <Stack alignItems="center" direction="horizontal" gap={2}>
      {IconLeft ? (
        <IconLeft
          className={clsx({
            "animate-spin": isLoading,
            "h-4 w-4": size === "sm",
            "h-5 w-5": size === "md",
          })}
        />
      ) : null}

      <span>{children}</span>

      {IconRight ? (
        <IconRight
          className={clsx({
            "h-4 w-4": size === "sm",
            "h-5 w-5": size === "md",
          })}
        />
      ) : null}
    </Stack>
  );
}
