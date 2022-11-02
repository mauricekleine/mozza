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
  GAP1: 1,
  GAP2: 2,
  GAP4: 4,
  GAP6: 6,
  GAP8: 8,
  GAP10: 10,
  GAP16: 16,
  GAP32: 32,
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
  const isHorizontal = direction === StackDirection.HORIZONTAL;
  const isOrthogonal = direction === StackDirection.ORTHOGONAL;
  const isVertical = direction === StackDirection.VERTICAL;

  return (
    <div
      className={classNames("flex flex-wrap", {
        "flex-col": isVertical,
        "flex-row": direction === StackDirection.HORIZONTAL,
        "items-center": alignItems === StackAlignItems.CENTER,
        "justify-around": justifyContent === StackJustifyContent.AROUND,
        "justify-between": justifyContent === StackJustifyContent.BETWEEN,
        "justify-center": justifyContent === StackJustifyContent.CENTER,
        "justify-end": justifyContent === StackJustifyContent.END,
        "gap-1": isOrthogonal && gap === StackGap.GAP1,
        "gap-2": isOrthogonal && gap === StackGap.GAP2,
        "gap-4": isOrthogonal && gap === StackGap.GAP4,
        "gap-6": isOrthogonal && gap === StackGap.GAP6,
        "gap-8": isOrthogonal && gap === StackGap.GAP8,
        "gap-10": isOrthogonal && gap === StackGap.GAP10,
        "gap-16": isOrthogonal && gap === StackGap.GAP16,
        "gap-32": isOrthogonal && gap === StackGap.GAP32,
        "gap-x-1": isHorizontal && gap === StackGap.GAP1,
        "gap-x-2": isHorizontal && gap === StackGap.GAP2,
        "gap-x-4": isHorizontal && gap === StackGap.GAP4,
        "gap-x-6": isHorizontal && gap === StackGap.GAP6,
        "gap-x-8": isHorizontal && gap === StackGap.GAP8,
        "gap-x-10": isHorizontal && gap === StackGap.GAP10,
        "gap-x-16": isHorizontal && gap === StackGap.GAP16,
        "gap-x-32": isHorizontal && gap === StackGap.GAP32,
        "gap-y-1": isVertical && gap === StackGap.GAP1,
        "gap-y-2": isVertical && gap === StackGap.GAP2,
        "gap-y-4": isVertical && gap === StackGap.GAP4,
        "gap-y-6": isVertical && gap === StackGap.GAP6,
        "gap-y-8": isVertical && gap === StackGap.GAP8,
        "gap-y-10": isVertical && gap === StackGap.GAP10,
        "gap-y-16": isVertical && gap === StackGap.GAP16,
        "gap-y-32": isVertical && gap === StackGap.GAP32,
      })}
    >
      {children}
    </div>
  );
}
