import classNames from "classnames";
import type { ReactNode } from "react";
import { Children } from "react";
import type { ValueOf } from "type-fest";

export const StackAlignItems = {
  CENTER: "center",
  NONE: "none",
} as const;

export const StackDirection = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
} as const;

export const StackGap = {
  GAP0: "gap-0",
  GAP1: "gap-1",
  GAP2: "gap-2",
  GAP4: "gap-4",
  GAP6: "gap-6",
  GAP8: "gap-8",
  GAP10: "gap-10",
  GAP32: "gap-32",
} as const;

export const StackJustifyContent = {
  BETWEEN: "between",
  CENTER: "center",
  END: "end",
  NONE: "none",
} as const;

type Props = {
  alignItems?: ValueOf<typeof StackAlignItems>;
  children: ReactNode | ReactNode[];
  direction?: ValueOf<typeof StackDirection>;
  gap?: ValueOf<typeof StackGap>;
  justifyContent?: ValueOf<typeof StackJustifyContent>;
};

export function Stack({
  alignItems = StackAlignItems.CENTER,
  children,
  direction = StackDirection.VERTICAL,
  gap,
  justifyContent,
}: Props) {
  return (
    <div
      className={classNames("flex flex-wrap", {
        "flex-col": direction === StackDirection.VERTICAL,
        "flex-row": direction === StackDirection.HORIZONTAL,
        "items-center":
          direction === StackDirection.HORIZONTAL &&
          alignItems === StackAlignItems.CENTER,
        "justify-between": justifyContent === StackJustifyContent.BETWEEN,
        "justify-center": justifyContent === StackJustifyContent.CENTER,
        "justify-end": justifyContent === StackJustifyContent.END,
        "gap-x-1":
          direction === StackDirection.HORIZONTAL && gap === StackGap.GAP1,
        "gap-x-2":
          direction === StackDirection.HORIZONTAL && gap === StackGap.GAP2,
        "gap-x-4":
          direction === StackDirection.HORIZONTAL && gap === StackGap.GAP4,
        "gap-x-6":
          direction === StackDirection.HORIZONTAL && gap === StackGap.GAP6,
        "gap-x-8":
          direction === StackDirection.HORIZONTAL && gap === StackGap.GAP8,
        "gap-x-10":
          direction === StackDirection.HORIZONTAL && gap === StackGap.GAP10,
        "gap-x-32":
          direction === StackDirection.HORIZONTAL && gap === StackGap.GAP32,
        "gap-y-1":
          direction === StackDirection.VERTICAL && gap === StackGap.GAP1,
        "gap-y-2":
          direction === StackDirection.VERTICAL && gap === StackGap.GAP2,
        "gap-y-4":
          direction === StackDirection.VERTICAL && gap === StackGap.GAP4,
        "gap-y-6":
          direction === StackDirection.VERTICAL && gap === StackGap.GAP6,
        "gap-y-8":
          direction === StackDirection.VERTICAL && gap === StackGap.GAP8,
        "gap-y-10":
          direction === StackDirection.VERTICAL && gap === StackGap.GAP10,
        "gap-y-32":
          direction === StackDirection.VERTICAL && gap === StackGap.GAP32,
      })}
    >
      {children}
    </div>
  );
}
