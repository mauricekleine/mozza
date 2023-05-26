import { ReactNode } from "react";

// eslint-disable-next-line no-restricted-imports
import {
  ResponsiveProp,
  transformResponsiveProp,
} from "../utils/responsive-utils";

import styles from "./text.module.scss";

type LabelProps = {
  as?: "label";
  children: string;
  htmlFor: string;
};

type ParagraphProps = {
  as?: "p";
  children: ReactNode;
};

type SpanProps = {
  as?: "span";
  children: string | string[];
};

type Props = (LabelProps | ParagraphProps | SpanProps) & {
  color?: "gray.100" | "gray.200" | "gray.300" | "gray.400" | "green" | "red";
  family?: "sans" | "serif";
  lineHeight?: "normal" | "tight";
  size?: ResponsiveProp<"xs" | "sm" | "base" | "lg" | "xl" | "2xl">;
  tracking?: "normal" | "tight";
  transform?: "uppercase";
  weight?: "bold" | "normal";
};

export function Text({
  as,
  children,
  color,
  family,
  lineHeight,
  size,
  tracking,
  transform,
  weight,
}: Props) {
  const As = as ?? "p";

  return (
    <As
      className={styles.text}
      data-color={color}
      data-family={family}
      data-line-height={lineHeight}
      data-size={size ? transformResponsiveProp(size) : undefined}
      data-tracking={tracking}
      data-transform={transform}
      data-weight={weight}
    >
      {children}
    </As>
  );
}
