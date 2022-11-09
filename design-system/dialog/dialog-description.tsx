import { Description as DescriptionPrimitive } from "@radix-ui/react-dialog";

import { Text } from "../typography";

type Props = {
  children: string;
};

export function DialogDescription({ children }: Props) {
  return (
    <DescriptionPrimitive asChild>
      <Text as="p">{children}</Text>
    </DescriptionPrimitive>
  );
}
