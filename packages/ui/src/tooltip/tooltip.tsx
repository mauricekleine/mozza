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
    <Root>
      <Trigger>{children}</Trigger>

      <Content align="center" className={className} side="bottom">
        {content}

        <Arrow height={5} width={11} />
      </Content>
    </Root>
  );
}
