import { Header } from "~/ui/typography";

type Props = {
  children: string;
};

export function CardHeader({ children }: Props) {
  return (
    <div className="group-hover:text-green-dark p-4 transition-colors sm:px-6">
      <Header as="h3">{children}</Header>
    </div>
  );
}
