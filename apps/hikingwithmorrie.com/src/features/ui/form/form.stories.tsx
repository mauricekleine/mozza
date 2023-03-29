import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";

import { Form, Input, InputGroup, Select, SelectItem, Submit } from "./";

const meta = {
  component: Form,
  tags: ["autodocs"],
  title: "Forms/Form",
} satisfies Meta<typeof Form>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <InputGroup label="First name" name="firstName">
          <Input name="firstName" />
        </InputGroup>

        <InputGroup label="Last name" name="lastName">
          <Input name="lastName" required />
        </InputGroup>

        <InputGroup label="Gender" name="gender">
          <Select name="gender">
            <SelectItem value="female">Female</SelectItem>

            <SelectItem value="male">Male</SelectItem>

            <SelectItem value="other">Other</SelectItem>

            <SelectItem value="unknown">I prefer not to say</SelectItem>
          </Select>
        </InputGroup>

        <Submit>Submit</Submit>
      </>
    ),
    onSubmit: action("onSubmit"),
    schema: z.object({
      cool: z.coerce.number(),
      firstName: z.string().min(1),
      gender: z.string(),
      lastName: z.string().min(1),
    }),
  },
  render: (props) => <Form {...props} />,
};

export default meta;
