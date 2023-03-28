import { clsxVariants } from ".";

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

describe("clsxVariants", () => {
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
          className: "green-small",
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
          className: "green-small",
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
});
