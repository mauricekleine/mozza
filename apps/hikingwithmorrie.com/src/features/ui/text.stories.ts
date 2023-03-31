import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta = {
  argTypes: {
    as: {
      control: { type: "radio" },
      defaultValue: "p",
      options: ["p", "span"],
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
