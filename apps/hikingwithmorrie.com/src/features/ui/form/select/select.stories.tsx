import type { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";

import { Select } from "./select";
import { SelectItem } from "./select-item";

const meta = {
  argTypes: {},
  component: Select,
  tags: ["autodocs"],
  title: "Forms/Select",
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 10 }).map((_, index) => (
          <SelectItem key={index} value={index.toString()}>
            Item {index}
          </SelectItem>
        ))}
      </>
    ),
    name: "item",
    placeholder: "Select item",
  },
  decorators: [
    (Story) => {
      const methods = useForm();
      return <FormProvider {...methods}>{Story()}</FormProvider>;
    },
  ],
};

export default meta;
