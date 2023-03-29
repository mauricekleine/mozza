import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "./navbar";

const meta = {
  argTypes: {
    dictionary: {
      table: {
        disable: true,
      },
    },
    locale: {
      table: {
        disable: true,
      },
    },
  },
  component: Navbar,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  title: "Navigation/Navbar",
} satisfies Meta<typeof Navbar>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // @ts-expect-error args are provided by Storybook globals
  args: {},
  render: (_, context) => (
    <Navbar
      dictionary={context.loaded.dictionary}
      locale={context.globals.locale}
    />
  ),
};

export default meta;
