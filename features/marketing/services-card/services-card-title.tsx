import { Heading } from "~/design-system";

export function ServicesCardTitle({ children }: { children: string }) {
  return <Heading as="h3">{children}</Heading>;
}
