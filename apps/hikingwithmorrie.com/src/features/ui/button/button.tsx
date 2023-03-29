import { clsx } from "clsx";
import {
  ComponentProps,
  ForwardedRef,
  ReactNode,
  Ref,
  forwardRef,
} from "react";

import { Icon } from "../icons";
import { LinkBase, LinkBaseProps } from "../typography/link-base";

import { ButtonContent } from "./button-content";

const buttonSizeStyles: { [key in ButtonSize]: string } = {
  lg: "px-7 py-3 text-lg",
  md: "px-5 py-2 text-base",
  sm: "px-3 py-1 text-sm",
} as const;

const buttonVariantStyles: { [key in ButtonVariant]: string } = {
  primary: "border-transparent bg-green-dark text-grey-light hover:text-white",
  secondary: "border-green-dark text-green-dark",
  tertiary:
    "border-transparent bg-transparent text-grey-dark hover:text-green-dark",
} as const;

function isAnchor<T extends string>(
  props: Props<T>
): props is ButtonLinkProps<T> {
  return (
    (props as ButtonLinkProps<T>).as === "a" || typeof props.href === "string"
  );
}

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = SharedProps & {
  as?: "button";
  href?: never;
  isLoading?: boolean;
  onClick?: ComponentProps<"button">["onClick"];
  type?: ComponentProps<"button">["type"];
};

type ButtonLinkProps<T extends string> = SharedProps &
  LinkBaseProps<T> & {
    onClick?: never;
    type?: never;
  };

type SharedProps = {
  children: ReactNode;
  iconLeft?: Icon;
  iconRight?: Icon;
  isDisabled?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type Props<T extends string> = ButtonProps | ButtonLinkProps<T>;

export const Button = forwardRef(function ButtonWithForwardedRef<
  T extends string
>(props: Props<T>, ref: Ref<HTMLAnchorElement | HTMLButtonElement>) {
  const {
    children,
    iconLeft,
    iconRight,
    isDisabled,
    size = "md",
    variant = "primary",
  } = props;

  const commonClassNames = clsx(
    "my-0.5 border rounded hover:rounded-lg shadow transition-all font-serif hover:transform hover:translate-y-[1px] hover:shadow-none",
    buttonSizeStyles[size],
    buttonVariantStyles[variant],
    {
      "opacity-75": isDisabled,
    }
  );

  if (isAnchor(props)) {
    return (
      <LinkBase
        className={clsx("inline-block", commonClassNames)}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        {...props}
      >
        <ButtonContent iconLeft={iconLeft} iconRight={iconRight} size={size}>
          {children}
        </ButtonContent>
      </LinkBase>
    );
  }

  const { isLoading, onClick, type } = props;

  return (
    <button
      className={clsx(commonClassNames, {
        "animate-pulse": isLoading,
      })}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      ref={ref as ForwardedRef<HTMLButtonElement>}
      type={type ?? "button"}
      {...props}
    >
      <ButtonContent
        iconLeft={iconLeft}
        iconRight={iconRight}
        isLoading={isLoading}
        size={size}
      >
        {children}
      </ButtonContent>
    </button>
  );
});

export type { ButtonLinkProps, ButtonProps, ButtonSize, ButtonVariant };
