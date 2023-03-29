import { render, screen } from "@testing-library/react";

import { Header } from "./header";

describe("header", () => {
  it("should render a 'h1' element", () => {
    render(<Header as="h1">Text</Header>);

    expect(screen.getByText(/text/i).nodeName).toBe("H1");
  });

  it("should render a 'h2' element", () => {
    render(<Header as="h2">Text</Header>);

    expect(screen.getByText(/text/i).nodeName).toBe("H2");
  });

  it("should render a 'h3' element", () => {
    render(<Header as="h3">Text</Header>);

    expect(screen.getByText(/text/i).nodeName).toBe("H3");
  });
});
