import { clsxVariants } from "./clsx-variants";

const variants = {
  color: {
    blue: "text-blue-500",
    green: "text-green-500",
    red: "text-red-500",
  },
  size: {
    large: "text-lg",
    medium: "text-base",
    small: "text-sm",
  },
};

describe("clsx-variants", () => {
  it("should return the correct class names", () => {
    const clsx = clsxVariants({
      variants,
    });

    const classes = clsx({ color: "red", size: "large" });

    expect(classes).toContain("text-red-500");
    expect(classes).toContain("text-lg");
  });

  it("should return the default variant class names", () => {
    const clsx = clsxVariants({
      defaultVariants: {
        size: "small",
      },
      variants,
    });

    const classes = clsx({ color: "green" });

    expect(classes).toContain("text-green-500");
    expect(classes).toContain("text-sm");
  });

  it("should return the compound variant class names", () => {
    const clsx = clsxVariants({
      compoundVariants: [
        {
          class: "green-small",
          color: "green",
          size: "small",
        },
      ],
      variants,
    });

    const classes = clsx({ color: "green", size: "small" });

    expect(classes).toContain("text-green-500");
    expect(classes).toContain("text-sm");
    expect(classes).toContain("green-small");
  });

  it("should return the compound variant class names when a default class name is set", () => {
    const clsx = clsxVariants({
      compoundVariants: [
        {
          class: "green-small",
          color: "green",
          size: "small",
        },
      ],
      defaultVariants: {
        size: "small",
      },
      variants,
    });

    const classes = clsx({ color: "green" });

    expect(classes).toContain("text-green-500");
    expect(classes).toContain("text-sm");
    expect(classes).toContain("green-small");
  });

  it("should return a base class name when it's passed as the first argument", () => {
    const clsx = clsxVariants({
      compoundVariants: [
        {
          class: "green-small",
          color: "green",
          size: "small",
        },
      ],
      defaultVariants: {
        size: "small",
      },
      variants,
    });

    const classes = clsx("flex", { color: "green" });

    expect(classes).toContain("flex");
    expect(classes).toContain("text-green-500");
    expect(classes).toContain("text-sm");
    expect(classes).toContain("green-small");
  });

  it("should accept boolean variant values", () => {
    const clsx = clsxVariants({
      compoundVariants: [
        {
          class: "blue-and-disabled",
          color: "blue",
          isDisabled: true,
        },
        {
          class: "green-and-not-disabled",
          color: "green",
          isDisabled: false,
        },
      ],
      defaultVariants: {
        color: "blue",
      },
      variants: {
        color: {
          blue: "blue",
          green: "green",
        },
        isDisabled: {
          false: "opacity-100",
          true: "opacity-75",
        },
      },
    });

    let classes = clsx();
    // Color variants
    expect(classes).toContain("blue");
    expect(classes).not.toContain("green");
    // Boolean variants
    expect(classes).not.toContain("opacity-100");
    expect(classes).not.toContain("opacity-75");
    // Compound variants
    expect(classes).not.toContain("blue-and-disabled");
    expect(classes).not.toContain("green-and-not-disabled");

    classes = clsx({ color: "green" });
    // Color variants
    expect(classes).toContain("green");
    expect(classes).not.toContain("blue");
    // Boolean variants
    expect(classes).not.toContain("opacity-100");
    expect(classes).not.toContain("opacity-75");
    // Compound variants
    expect(classes).not.toContain("blue-and-disabled");
    expect(classes).not.toContain("green-and-not-disabled");

    classes = clsx({ color: "green", isDisabled: false });
    // Color variants
    expect(classes).toContain("green");
    expect(classes).not.toContain("blue");
    // Boolean variants
    expect(classes).toContain("opacity-100");
    expect(classes).not.toContain("opacity-75");
    // Compound variants
    expect(classes).not.toContain("blue-and-disabled");
    expect(classes).toContain("green-and-not-disabled");

    classes = clsx({ color: "green", isDisabled: true });
    // Color variants
    expect(classes).toContain("green");
    expect(classes).not.toContain("blue");
    // Boolean variants
    expect(classes).not.toContain("opacity-100");
    expect(classes).toContain("opacity-75");
    // Compound variants
    expect(classes).not.toContain("blue-and-disabled");
    expect(classes).not.toContain("green-and-not-disabled");

    classes = clsx({ color: "blue" });
    // Color variants
    expect(classes).toContain("blue");
    expect(classes).not.toContain("green");
    // Boolean variants
    expect(classes).not.toContain("opacity-100");
    expect(classes).not.toContain("opacity-75");
    // Compound variants
    expect(classes).not.toContain("blue-and-disabled");
    expect(classes).not.toContain("green-and-not-disabled");

    classes = clsx({ color: "blue", isDisabled: false });
    // Color variants
    expect(classes).toContain("blue");
    expect(classes).not.toContain("green");
    // Boolean variants
    expect(classes).toContain("opacity-100");
    expect(classes).not.toContain("opacity-75");
    // Compound variants
    expect(classes).not.toContain("blue-and-disabled");
    expect(classes).not.toContain("green-and-not-disabled");

    classes = clsx({ color: "blue", isDisabled: true });
    // Color variants
    expect(classes).toContain("blue");
    expect(classes).not.toContain("green");
    // Boolean variants
    expect(classes).not.toContain("opacity-100");
    expect(classes).toContain("opacity-75");
    // Compound variants
    expect(classes).toContain("blue-and-disabled");
    expect(classes).not.toContain("green-and-not-disabled");
  });
});
