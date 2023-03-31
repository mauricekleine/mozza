import { render, screen } from "@testing-library/react";

import { As } from "./as";

describe("header", () => {
  it("should render a 'div' element", () => {
    render(<As as="div">Text</As>);

    expect(screen.getByText(/text/i).nodeName).toBe("DIV");
  });

  it("should render a 'h1' element", () => {
    render(<As as="h1">Text</As>);

    expect(screen.getByText(/text/i).nodeName).toBe("H1");
  });

  it("should render a 'h2' element", () => {
    render(<As as="h2">Text</As>);

    expect(screen.getByText(/text/i).nodeName).toBe("H2");
  });

  it("should render a 'h3' element", () => {
    render(<As as="h3">Text</As>);

    expect(screen.getByText(/text/i).nodeName).toBe("H3");
  });

  it("should render a 'span' element", () => {
    render(<As as="span">Text</As>);

    expect(screen.getByText(/text/i).nodeName).toBe("SPAN");
  });
});
