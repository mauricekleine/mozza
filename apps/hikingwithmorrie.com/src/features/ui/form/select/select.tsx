"use client";

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

import { Text } from "@/ui/typography";

import { CaretDown, CaretUp } from "../../icons";

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
          "form-select my-0.5 flex w-full items-center justify-between rounded px-3 py-2 text-base text-grey-dark shadow-sm",
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
        <Content className="z-50 overflow-hidden rounded border border-grey-light bg-white shadow-xl">
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
