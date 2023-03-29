import { Header } from "../../typography";

type Props = {
  children: string;
};

export function CardHeader({ children }: Props) {
  return (
    <div className="p-4 transition-colors group-hover:text-green-dark sm:px-6">
      <Header as="h3">{children}</Header>
    </div>
  );
}
