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
  color?: "gray.100" | "gray.200" | "gray.300" | "gray.400";
  decoration?: "none" | "underline";
  family?: "sans" | "serif";
  size?: ResponsiveProp<"xs" | "sm" | "base" | "lg" | "xl" | "2xl">;
  tracking?: "normal" | "tight";
  transform?: "uppercase";
  weight?: "bold" | "normal";
};

export function Text({
  as,
  children,
  color,
  decoration,
  family,
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
      data-decoration={decoration}
      data-family={family}
      data-size={size ? transformResponsiveProp(size) : undefined}
      data-tracking={tracking}
      data-transform={transform}
      data-weight={weight}
    >
      {children}
    </As>
  );
}
