import type { Meta, StoryObj } from "@storybook/react";

import { ArrowUpRight } from "./arrow-up-right";

const meta = {
  argTypes: {},
  component: ArrowUpRight,
  tags: ["autodocs"],
  title: "Icons/Icon",
} satisfies Meta<typeof ArrowUpRight>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
