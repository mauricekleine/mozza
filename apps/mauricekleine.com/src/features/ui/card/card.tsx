// eslint-disable-next-line no-restricted-imports
import { Box, BoxProps } from "../layout";

import { CardIcon } from "./card-icon";
import { CardTitle } from "./card-title";
import styles from "./card.module.scss";

type Props = BoxProps & {
  variant?: "plain" | "neon";
};

function Card({ children, variant = "plain", ...props }: Props) {
  if (variant === "plain") {
    return (
      <Box className={styles.card} data-variant={variant} {...props}>
        {children}
      </Box>
    );
  }

  return (
    <div className={styles.card} data-variant={variant}>
      <Box {...props}>{children}</Box>
    </div>
  );
}

Card.Icon = CardIcon;
Card.Title = CardTitle;

export { Card };
