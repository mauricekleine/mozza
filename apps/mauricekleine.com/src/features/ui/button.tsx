import { CircleNotch, Icon } from "@mozza-icons/react";
import { Button as ButtonBase, ButtonProps, Stack } from "@mozza-ui/react";
import clsx from "clsx";
import { VariantProps, clsxVariants } from "clsx-variants";
import { forwardRef } from "react";

const variants = clsxVariants({
  compoundVariants: [
    {
      class: "py-2 px-6",
      size: "sm",
      variant: "secondary",
    },
    {
      class: "py-2 px-6",
      size: "sm",
      variant: "primary",
    },
    {
      class: "py-3 px-8",
      size: "md",
      variant: "secondary",
    },
    {
      class: "py-3 px-8",
      size: "md",
      variant: "primary",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "secondary",
  },
  variants: {
    isDisabled: {
      true: "opacity-75",
    },
    isLoading: {
      true: "animate-pulse",
    },
    size: {
      md: "text-base",
      sm: "text-sm",
    },
    variant: {
      primary:
        "relative z-10 border border-transparent bg-slate-200 text-slate-800 before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-slate-200 before:opacity-0 before:blur before:transition-opacity before:duration-300 hover:text-slate-900 hover:before:opacity-100 hover:text-slate-900",
      secondary:
        "border border-slate-400 text-slate-200 hover:border-slate-100 hover:text-slate-100",
      tertiary: "hover:underline",
    },
  },
});

type Props = ButtonProps &
  VariantProps<typeof variants> & {
    iconLeft?: Icon;
    iconRight?: Icon;
  };

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(
  function ButtonWithForwardedRef(
    { children, iconLeft, iconRight, size, variant, ...props },
    ref
  ) {
    const IconLeft = props.isLoading ? CircleNotch : iconLeft;
    const IconRight = iconRight;

    return (
      <ButtonBase
        className={variants("rounded-lg transition-colors", {
          isDisabled: props.isDisabled,
          isLoading: props.isLoading,
          size,
          variant,
        })}
        ref={ref}
        {...props}
      >
        <Stack direction="horizontal" gap={2} items="center" justify="center">
          {IconLeft ? (
            <IconLeft
              className={clsx({
                "animate-spin": props.isLoading,
                "h-4 w-4": size === "sm",
                "h-5 w-5": size === "md" || size === undefined,
              })}
            />
          ) : undefined}

          {children}

          {IconRight ? (
            <IconRight
              className={clsx({
                "h-4 w-4": size === "sm",
                "h-5 w-5": size === "md" || size === undefined,
              })}
            />
          ) : undefined}
        </Stack>
      </ButtonBase>
    );
  }
);
