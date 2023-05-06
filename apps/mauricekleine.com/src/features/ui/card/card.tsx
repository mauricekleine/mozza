// eslint-disable-next-line no-restricted-imports
import { Box, BoxProps } from "../layout";

import { CardIcon } from "./card-icon";
import { CardTitle } from "./card-title";
import styles from "./card.module.scss";

type Props = BoxProps & {
  variant?: "callout" | "plain" | "neon";
};

function Card({ children, variant = "plain", ...props }: Props) {
  if (variant === "neon") {
    return (
      <div className={styles.card} data-variant={variant}>
        <Box {...props}>{children}</Box>
      </div>
    );
  }

  return (
    <Box className={styles.card} data-variant={variant} {...props}>
      {children}
    </Box>
  );
}

Card.Icon = CardIcon;
Card.Title = CardTitle;

export { Card };
