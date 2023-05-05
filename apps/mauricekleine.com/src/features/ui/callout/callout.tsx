// eslint-disable-next-line no-restricted-imports
import { Box, BoxProps } from "../layout";

import styles from "./callout.module.scss";

type Props = BoxProps;

export function Callout({ children, ...props }: Props) {
  return (
    <Box className={styles.callout} {...props}>
      {children}
    </Box>
  );
}
