import { CircleNotch, Icon } from "@mozza-icons/react";
import { Button as ButtonBase, ButtonProps, Stack } from "@mozza-ui/react";
import clsx from "clsx";
import { VariantProps, clsxVariants } from "clsx-variants";
import { forwardRef } from "react";

const variants = clsxVariants({
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
  variants: {
    isDisabled: {
      true: "opacity-75",
    },
    isLoading: {
      true: "animate-pulse",
    },
    size: {
      lg: "px-7 py-3 text-lg",
      md: "px-5 py-2 text-base",
      sm: "px-3 py-1 text-sm",
    },
    variant: {
      primary:
        "border-transparent bg-green-dark text-grey-light hover:text-white",
      secondary: "border-green-dark text-green-dark",
      tertiary:
        "border-transparent bg-transparent text-grey-dark hover:text-green-dark",
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
        className={variants(
          "my-0.5 rounded border font-serif shadow transition-all hover:translate-y-[1px] hover:transform hover:rounded-lg hover:shadow-none",
          {
            isDisabled: props.isDisabled,
            isLoading: props.isLoading,
            size,
            variant,
          }
        )}
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
                "h-7 w-7": size === "lg",
              })}
            />
          ) : undefined}

          {children}

          {IconRight ? (
            <IconRight
              className={clsx({
                "h-4 w-4": size === "sm",
                "h-5 w-5": size === "md" || size === undefined,
                "h-7 w-7": size === "lg",
              })}
            />
          ) : undefined}
        </Stack>
      </ButtonBase>
    );
  }
);
