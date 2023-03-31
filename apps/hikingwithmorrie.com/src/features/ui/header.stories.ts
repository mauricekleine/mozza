import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./header";

const meta = {
  argTypes: {},
  component: Header,
  tags: ["autodocs"],
  title: "Typography/Header",
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    as: "h1",
    children: "Header 1",
  },
};

export const H2: Story = {
  args: {
    as: "h2",
    children: "Header 2",
  },
};

export const H3: Story = {
  args: {
    as: "h3",
    children: "Header 3",
  },
};

export default meta;
