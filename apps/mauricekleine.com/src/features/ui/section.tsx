import { Stack } from "@mozza-ui/react";
import { clsx } from "clsx";
import { ReactNode } from "react";

import { Header } from "./header";
import { Text } from "./text";

type Props = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  subtitle?: string;
  title?: string;
};

export function Section({ children, size = "md", subtitle, title }: Props) {
  return (
    <div
      className={clsx("mx-auto", {
        "w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12": size === "sm",
        "w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12": size === "md",
        "w-11/12 sm:w-11/12 md:w-10/12 lg:w-10/12": size === "lg",
      })}
    >
      <Stack gap={8} items="center" justify="center">
        {title || subtitle ? (
          <Stack gap={2} textAlign="center">
            {title ? <Header as="h2">{title}</Header> : undefined}

            {subtitle ? (
              <Text color={400} tracking="tight" transform="uppercase">
                {subtitle}
              </Text>
            ) : undefined}
          </Stack>
        ) : undefined}

        {children}
      </Stack>
    </div>
  );
}
