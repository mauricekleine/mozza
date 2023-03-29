import type { Meta, StoryObj } from "@storybook/react";

import { ArrowUpRight } from "@mozza-icons/react";

import { Button } from "./button";

const meta = {
  argTypes: {
    onClick: {
      action: "clicked",
      table: {
        disable: true,
      },
    },
    size: {
      control: { type: "radio" },
      defaultValue: "md",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "radio" },
      defaultValue: "primary",
      options: ["primary", "secondary", "tertiary"],
    },
  },
  component: Button,
  tags: ["autodocs"],
  title: "Buttons/Button",
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary",
    variant: "tertiary",
  },
};

export const WithIconLeft: Story = {
  args: {
    children: "With icon left",
    iconLeft: ArrowUpRight,
  },
};

export const WithIconRight: Story = {
  args: {
    children: "With icon right",
    iconRight: ArrowUpRight,
  },
};

export const ExternalLink: Story = {
  args: {
    as: "a",
    children: "External link",
    href: "https://example.com",
  },
};

export const InternalLink: Story = {
  args: {
    children: "Internal link",
    href: "/en/blog",
  },
};

export default meta;
