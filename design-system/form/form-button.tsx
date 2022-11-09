import { Button } from "../button";
import { Stack } from "../layout";

import { useForm } from "./use-form";

type Props = {
  children: string;
};

export function FormButton({ children }: Props) {
  const { isSubmitting } = useForm();

  return (
    <Stack direction="horizontal" justifyContent="end">
      <Button isLoading={isSubmitting} type="submit">
        {children}
      </Button>
    </Stack>
  );
}
