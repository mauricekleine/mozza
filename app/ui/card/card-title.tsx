import { Heading } from "../typography";

type Props = {
  children: string;
};

export function CardTitle({ children }: Props) {
  return (
    <div>
      <Heading as="h2">{children}</Heading>
    </div>
  );
}
