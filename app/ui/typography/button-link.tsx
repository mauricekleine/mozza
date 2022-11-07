import classNames from "classnames";
import { IconProps } from "phosphor-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

import { Stack } from "../layout";

type Props = {
  children: string;
  size?: "sm" | "md";
  type?: "link" | "outline" | "solid";
} & (
  | {
      as?: "a";
      href: string;
      onClick?: never;
    }
  | {
      as?: "button";
      href?: never;
      onClick: () => void;
    }
) &
  (
    | {
        iconLeft?: ForwardRefExoticComponent<
          IconProps & RefAttributes<SVGSVGElement>
        >;
        iconRight?: never;
      }
    | {
        iconLeft?: never;
        iconRight?: ForwardRefExoticComponent<
          IconProps & RefAttributes<SVGSVGElement>
        >;
      }
  );

export function ButtonLink({
  as = "a",
  children,
  href,
  iconLeft,
  iconRight,
  onClick,
  size = "md",
  type = "outline",
}: Props) {
  const Element = as;
  const IconLeft = iconLeft;
  const IconRight = iconRight;

  const props =
    Element === "a"
      ? {
          href,
          rel: "noopener noreferrer",
          target: "_blank",
        }
      : {
          onClick,
          type: "button" as "button",
        };

  return (
    <Element
      className={classNames("rounded-full transition-colors", {
        "py-2 px-6 text-sm": size === "sm",
        "py-3 px-8": size === "md",
        "hover:underline": type === "link",
        "border border-slate-400 hover:border-slate-200": type === "outline",
        "bg-slate-200 text-slate-800 hover:bg-slate-300 hover:text-slate-900":
          type === "solid",
      })}
      {...props}
    >
      <Stack alignItems="center" direction="horizontal" gap={2}>
        {IconLeft ? (
          <IconLeft
            className={classNames({
              "h-4 w-4": size === "sm",
              "h-5 w-5": size === "md",
            })}
          />
        ) : null}

        <span>{children}</span>

        {IconRight ? (
          <IconRight
            className={classNames({
              "h-4 w-4": size === "sm",
              "h-5 w-5": size === "md",
            })}
          />
        ) : null}
      </Stack>
    </Element>
  );
}
