import { Title as TitlePrimitive } from "@radix-ui/react-dialog";

import { Heading } from "../typography";

type Props = {
  children: string;
};

export function DialogTitle({ children }: Props) {
  return (
    <TitlePrimitive asChild>
      <Heading as="h3">{children}</Heading>
    </TitlePrimitive>
  );
}
