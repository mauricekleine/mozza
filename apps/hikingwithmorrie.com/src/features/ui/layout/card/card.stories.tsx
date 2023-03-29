import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./";

const meta = {
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
  component: Card,
  tags: ["autodocs"],
  title: "Layout/Card",
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Header>Card header</Card.Header>

        <Card.Body>
          Mollit cillum mollit officia. In elit sunt nostrud sint reprehenderit
          ex non exercitation est tempor dolore nisi ut do. Magna fugiat tempor
          occaecat ullamco quis id aliqua. Eiusmod dolore commodo dolor culpa
          mollit et consectetur. Excepteur laborum aliquip in aliqua proident ex
          exercitation velit. Velit Lorem laborum commodo mollit sint aliquip
          nostrud aliquip et anim dolor cupidatat exercitation. Eu magna aliqua
          anim nostrud laborum eiusmod sunt reprehenderit exercitation in
          consectetur nulla.
        </Card.Body>

        <Card.Footer>Read more</Card.Footer>
      </>
    ),
  },
  render: (props) => <Card {...props} />,
};

export default meta;
