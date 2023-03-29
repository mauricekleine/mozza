import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";

import { Input } from "./input";

const meta = {
  argTypes: {},
  component: Input,
  tags: ["autodocs"],
  title: "Forms/Input",
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "firstName",
    placeholder: "First name",
  },
  decorators: [
    (Story) => {
      const methods = useForm();
      return <FormProvider {...methods}>{Story()}</FormProvider>;
    },
  ],
};

export default meta;
