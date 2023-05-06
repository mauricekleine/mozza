// eslint-disable-next-line no-restricted-imports
import { Text } from "../typography";

type Props = {
  children: string;
  htmlFor: string;
};

export function Label({ children, htmlFor }: Props) {
  return (
    <Text as="label" color="gray.300" htmlFor={htmlFor} size="sm" weight="bold">
      {children}
    </Text>
  );
}
