import { render, screen } from "@testing-library/react";

import { Text } from "./text";

describe("text", () => {
  it("should render a 'p' element", () => {
    render(<Text>Text</Text>);

    expect(screen.getByText(/text/i).nodeName).toBe("P");
  });

  it("should render a 'span' element", () => {
    render(<Text as="span">Text</Text>);

    expect(screen.getByText(/text/i).nodeName).toBe("SPAN");
  });
});
