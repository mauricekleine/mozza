import { clsx } from "clsx";
import { clsxVariants } from "clsx-variants";
import { ComponentProps, ForwardedRef, forwardRef } from "react";

import { ButtonContent } from "./button-content";
import type { Props as ButtonContentProps } from "./button-content";

export type ButtonSize = "sm" | "md";

type IntrinsicAnchorProps = ComponentProps<"a">;
type IntrinsicButtonProps = ComponentProps<"button">;

type CommonProps = {
  variant?: "link" | "outline" | "solid";
} & ButtonContentProps;

type AnchorProps = {
  as: "a";
  href: IntrinsicAnchorProps["href"];
} & CommonProps;

type ButtonProps = {
  as?: "button";
  href?: never;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: IntrinsicButtonProps["onClick"];
  type?: IntrinsicButtonProps["type"];
} & CommonProps;

function isAnchor(props: Props): props is AnchorProps {
  return (props as AnchorProps).as === "a";
}

const variants = clsxVariants({
  compoundVariants: [
    {
      className: "py-2 px-6",
      size: "sm",
      variant: "outline",
    },
    {
      className: "py-2 px-6",
      size: "sm",
      variant: "solid",
    },
    {
      className: "py-3 px-8",
      size: "md",
      variant: "outline",
    },
    {
      className: "py-3 px-8",
      size: "md",
      variant: "solid",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
  variants: {
    size: {
      md: "text-base",
      sm: "text-sm",
    },
    variant: {
      link: "hover:underline",
      outline:
        "border border-slate-400 text-slate-200 hover:border-slate-100 hover:text-slate-100",
      solid:
        "relative z-10 border border-transparent bg-slate-200 text-slate-800 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-slate-200 before:opacity-0 before:blur before:transition-opacity before:duration-300 hover:text-slate-900 hover:before:opacity-100 hover:text-slate-900",
    },
  },
});

export type Props = AnchorProps | ButtonProps;

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(
  function Button({ ...props }, ref) {
    const {
      children,
      iconLeft,
      iconRight,
      size = "md",
      variant = "outline",
    } = props;

    if (!("as" in props)) {
      props.as = "button";
    }

    const className = clsx(
      "rounded-full transition-colors",
      variants({
        size,
        variant,
      })
    );

    if (isAnchor(props)) {
      const { href } = props;
      const isExternalLink = href?.startsWith("http");

      const anchorProps: IntrinsicAnchorProps = {
        className,
        href,
      };

      if (isExternalLink) {
        anchorProps["rel"] = "noopener noreferrer";
        anchorProps["target"] = "_blank";
      }

      return (
        <a {...anchorProps} ref={ref as ForwardedRef<HTMLAnchorElement>}>
          <ButtonContent iconLeft={iconLeft} iconRight={iconRight} size={size}>
            {children}
          </ButtonContent>
        </a>
      );
    }

    const { isDisabled, isLoading, onClick, type = "button" } = props;

    return (
      <button
        className={clsx(className, {
          "animate-pulse": isLoading,
          "opacity-75": isDisabled,
        })}
        disabled={isDisabled || isLoading}
        onClick={onClick}
        ref={ref as ForwardedRef<HTMLButtonElement>}
        type={type}
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
  }
);
