import { Label as BaseLabel } from "@mozza-ui/react";

type Props = {
  children: string;
  htmlFor: string;
};

export function Label({ children, htmlFor }: Props) {
  return (
    <BaseLabel color="text-slate-300" htmlFor={htmlFor} size="sm" weight="bold">
      {children}
    </BaseLabel>
  );
}
