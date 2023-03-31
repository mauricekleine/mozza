import { ComponentPropsWithoutRef, ElementType, Ref, forwardRef } from "react";

export const As = forwardRef(function AsWithForwardedRef<
  As extends ElementType
>(
  {
    as,
    ...props
  }: {
    as: As;
  } & ComponentPropsWithoutRef<As>,
  ref: Ref<unknown>
) {
  const Element = as;

  return <Element {...(props as any)} ref={ref} />;
});

export type PropsWithAs<As extends ElementType, Props = {}> = Props & {
  as?: As;
} & Omit<ComponentPropsWithoutRef<As>, keyof Props>;
