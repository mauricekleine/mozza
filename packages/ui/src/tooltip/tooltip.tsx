"use client";

import { Arrow, Content, Root, Trigger } from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  content: string;
};

export function Tooltip({ children, className, content }: Props) {
  return (
    <Root delayDuration={0}>
      <Trigger>{children}</Trigger>

      <Content
        align="center"
        className={className}
        side="bottom"
        sideOffset={4}
      >
        {content}

        <Arrow className="fill-white/50" height={5} width={11} />
      </Content>
    </Root>
  );
}
