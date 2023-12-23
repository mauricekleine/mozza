type Breakpoints = "base" | "sm" | "md" | "lg";
type ResponsiveValue = number | string;

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

export type ResponsiveProp<Prop extends ResponsiveValue> =
  | Prop
  | {
      [key in Breakpoints]?: Prop;
    };

export function transformResponsiveProp<T extends ResponsiveValue>(
  prop: ResponsiveProp<T>,
) {
  if (isObject(prop)) {
    return Object.entries(prop)
      .map(([key, value]) => {
        return `${key}:${value}`;
      })
      .join(" ");
  }

  return `base:${prop}`;
}
