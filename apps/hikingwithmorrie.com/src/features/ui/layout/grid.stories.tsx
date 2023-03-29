import type { Meta, StoryObj } from "@storybook/react";

import { Grid } from "./grid";

const meta = {
  argTypes: {
    children: {
      table: { disable: true },
    },
    columns: {
      control: { type: "radio" },
      defaultValue: "auto",
      options: ["auto", "none", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
    rows: {
      control: { type: "radio" },
      defaultValue: "auto",
      options: ["auto", "none", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    textAlign: {
      control: { type: "radio" },
      defaultValue: "left",
      options: ["center", "left", "right"],
    },
  },
  component: Grid,
  tags: ["autodocs"],
  title: "Layout/Grid",
} satisfies Meta<typeof Grid>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: Array.from({ length: 10 }).map((_, index) => (
      <div key={index}>Item {index + 1}</div>
    )),
  },
  render: (args) => <Grid {...args} />,
};

export default meta;
