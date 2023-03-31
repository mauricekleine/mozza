"use client";

import { CaretDown, CaretUp } from "@mozza-icons/react";
import {
  Content,
  Portal,
  Root,
  ScrollDownButton,
  ScrollUpButton,
  Trigger,
  Value,
  Viewport,
} from "@radix-ui/react-select";
import clsx from "clsx";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

import { Text } from "~/ui";

type Props = {
  children: ReactNode;
  name: string;
  placeholder?: string;
};

export function Select({ children, name, placeholder }: Props) {
  const {
    formState: { errors },
    setValue,
  } = useFormContext();
  const error = errors?.[name];

  return (
    <Root
      name={name}
      onValueChange={(value) => setValue(name, value, { shouldValidate: true })}
    >
      <Trigger
        className={clsx(
          "form-select text-grey-dark my-0.5 flex w-full items-center justify-between rounded px-3 py-2 text-base shadow-sm",
          {
            "border-grey-light focus:border-green-dark focus:ring-green-dark":
              !error,
            "border-red focus:border-red focus:ring-red": error,
          }
        )}
      >
        <Value placeholder={<Text color="grey">{placeholder}&nbsp;</Text>} />
      </Trigger>

      <Portal>
        <Content className="border-grey-light z-50 overflow-hidden rounded border bg-white shadow-xl">
          <ScrollUpButton>
            <CaretUp />
          </ScrollUpButton>

          <Viewport className="py-1">{children}</Viewport>

          <ScrollDownButton>
            <CaretDown />
          </ScrollDownButton>
        </Content>
      </Portal>
    </Root>
  );
}
