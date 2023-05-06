import { ReactNode } from "react";

// eslint-disable-next-line no-restricted-imports
import { Box } from "../layout";

type Props = {
  children: ReactNode | ReactNode[];
};

export function InputGroup({ children }: Props) {
  return (
    <Box gap={1} role="group">
      {children}
    </Box>
  );
}
