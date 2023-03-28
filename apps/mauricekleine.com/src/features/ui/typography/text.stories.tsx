import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta = {
  argTypes: {
    color: {
      control: { type: "radio" },
      defaultValue: 200,
      options: [0, 50, 100, 200, 300, 400],
    },
    serif: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    size: {
      control: { type: "radio" },
      defaultValue: "base",
      options: ["xs", "sm", "base", "lg", "xl", "2xl"],
    },
    tracking: {
      control: { type: "radio" },
      defaultValue: "normal",
      options: ["tighter", "tight", "normal"],
    },
    weight: {
      control: { type: "radio" },
      defaultValue: "normal",
      options: ["normal", "semibold", "bold"],
    },
  },
  component: Text,
  tags: ["autodocs"],
  title: "Typography/Text",
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export default meta;
