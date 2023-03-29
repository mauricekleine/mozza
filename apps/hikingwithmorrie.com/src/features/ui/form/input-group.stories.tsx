import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";

import { Input } from "./input";
import { InputGroup } from "./input-group";

const meta = {
  argTypes: {},
  component: InputGroup,
  tags: ["autodocs"],
  title: "Forms/Input group",
} satisfies Meta<typeof InputGroup>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Input name="firstName" />,
    label: "First name",
    name: "firstName",
  },
  decorators: [
    (Story) => {
      const methods = useForm();
      return <FormProvider {...methods}>{Story()}</FormProvider>;
    },
  ],
  render: (args) => <InputGroup {...args} />,
};

export default meta;
