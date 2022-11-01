import classNames from "classnames";
import type { ReactNode } from "react";
import type { ValueOf } from "type-fest";

const StackAlignItems = {
  CENTER: "center",
  NONE: "none",
} as const;

const StackDirection = {
  HORIZONTAL: "horizontal",
  ORTHOGONAL: "orthogonal",
  VERTICAL: "vertical",
} as const;

const StackGap = {
  GAP1: "gap-1",
  GAP2: "gap-2",
  GAP4: "gap-4",
  GAP6: "gap-6",
  GAP8: "gap-8",
  GAP10: "gap-10",
  GAP32: "gap-32",
} as const;

const StackJustifyContent = {
  AROUND: "around",
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
  alignItems = StackAlignItems.NONE,
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
        "items-center": alignItems === StackAlignItems.CENTER,
        "justify-around": justifyContent === StackJustifyContent.AROUND,
        "justify-between": justifyContent === StackJustifyContent.BETWEEN,
        "justify-center": justifyContent === StackJustifyContent.CENTER,
        "justify-end": justifyContent === StackJustifyContent.END,
        "gap-1":
          direction === StackDirection.ORTHOGONAL && gap === StackGap.GAP1,
        "gap-2":
          direction === StackDirection.ORTHOGONAL && gap === StackGap.GAP2,
        "gap-4":
          direction === StackDirection.ORTHOGONAL && gap === StackGap.GAP4,
        "gap-6":
          direction === StackDirection.ORTHOGONAL && gap === StackGap.GAP6,
        "gap-8":
          direction === StackDirection.ORTHOGONAL && gap === StackGap.GAP8,
        "gap-10":
          direction === StackDirection.ORTHOGONAL && gap === StackGap.GAP10,
        "gap-32":
          direction === StackDirection.ORTHOGONAL && gap === StackGap.GAP32,
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
