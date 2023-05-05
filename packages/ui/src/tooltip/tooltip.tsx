"use client";

import { Arrow, Content, Root, Trigger } from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

type Props = {
  "aria-label"?: string;
  children: ReactNode;
  className?: string;
  content: string;
};

export function Tooltip({
  "aria-label": ariaLabel,
  children,
  className,
  content,
}: Props) {
  return (
    <Root delayDuration={0}>
      <Trigger aria-label={ariaLabel}>{children}</Trigger>

      <Content
        align="center"
        className={className}
        side="bottom"
        sideOffset={4}
      >
        {content}

        <Arrow height={5} width={11} />
      </Content>
    </Root>
  );
}

export type TooltipProps = Omit<Props, "className">;
