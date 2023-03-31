import { Header } from "~/ui";

type Props = {
  children: string;
};

export function CardTitle({ children }: Props) {
  return (
    <div>
      <Header as="h2">{children}</Header>
    </div>
  );
}
