import { CircleNotch } from "@mozza-icons/react";
import { Stack } from "@mozza-ui/react";
import { clsx } from "clsx";
import { ReactNode } from "react";

import { Icon } from "../icon";

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
    <Stack direction="horizontal" gap={2} items="center">
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
