import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "./heading";

const meta = {
  argTypes: {
    as: {
      control: { type: "radio" },
      options: ["h1", "h2", "h3"],
    },
  },
  component: Heading,
  tags: ["autodocs"],
  title: "Typography/Heading",
} satisfies Meta<typeof Heading>;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    as: "h1",
    children: "Header one",
  },
};

export const H2: Story = {
  args: {
    as: "h2",
    children: "Header two",
  },
};

export const H3: Story = {
  args: {
    as: "h3",
    children: "Header three",
  },
};

export default meta;
