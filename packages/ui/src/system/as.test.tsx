import { render, screen } from "@testing-library/react";
import { clsxVariants } from "clsx-variants";

import { As } from "./as";

const variants = clsxVariants({
  variants: {
    as: {
      div: "div-class",
      h1: "h1-class",
      h2: "h2-class",
      h3: "h3-class",
      span: "span-class",
    },
  },
});

describe("header", () => {
  it("should render a 'div' element", () => {
    render(
      <As as="div" variants={variants}>
        Text
      </As>
    );

    expect(screen.getByText(/text/i).nodeName).toBe("DIV");
  });

  it("should render a 'h1' element", () => {
    render(
      <As as="h1" variants={variants}>
        Text
      </As>
    );

    expect(screen.getByText(/text/i).nodeName).toBe("H1");
  });

  it("should render a 'h2' element", () => {
    render(
      <As as="h2" variants={variants}>
        Text
      </As>
    );

    expect(screen.getByText(/text/i).nodeName).toBe("H2");
  });

  it("should render a 'h3' element", () => {
    render(
      <As as="h3" variants={variants}>
        Text
      </As>
    );

    expect(screen.getByText(/text/i).nodeName).toBe("H3");
  });

  it("should render a 'span' element", () => {
    render(
      <As as="span" variants={variants}>
        Text
      </As>
    );

    expect(screen.getByText(/text/i).nodeName).toBe("SPAN");
  });
});
