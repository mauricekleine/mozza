import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "./stack";

const meta = {
  argTypes: {
    children: {
      table: { disable: true },
    },
    direction: {
      control: { type: "radio" },
      defaultValue: "vertical",
      options: ["horizontal", "vertical"],
    },
    gap: {
      control: { type: "radio" },
      defaultValue: 2,
      options: [1, 2, 4, 8, 16, 32, 64],
    },
    items: {
      control: { type: "radio" },
      defaultValue: "start",
      options: ["center", "start", "end"],
    },
    justify: {
      control: { type: "radio" },
      defaultValue: "start",
      options: ["around", "between", "center", "end", "evenly", "start"],
    },
    textAlign: {
      control: { type: "radio" },
      defaultValue: "left",
      options: ["center", "left", "right"],
    },
    wrap: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
  component: Stack,
  tags: ["autodocs"],
  title: "Layout/Stack",
} satisfies Meta<typeof Stack>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: Array.from({ length: 10 }).map((_, index) => (
      <div key={index}>Item {index + 1}</div>
    )),
  },
  render: (args) => <Stack {...args} />,
};

export default meta;
