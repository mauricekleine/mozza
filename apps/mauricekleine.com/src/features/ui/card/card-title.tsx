import { Header } from "~/ui/typography";

type Props = {
  children: string;
};

export function CardTitle({ children }: Props) {
  return <Header as="h2">{children}</Header>;
}
