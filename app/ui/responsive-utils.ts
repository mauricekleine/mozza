type Breakpoints = "base" | "sm" | "md" | "lg";

type ResponsiveValue = number | string;

export type ResponsiveProp<Prop extends ResponsiveValue> =
  | Prop
  | {
      [key in Breakpoints]?: Prop;
    };

export function toResponsiveObject<T extends ResponsiveValue>(
  prop: ResponsiveProp<T>
): {
  [key in Breakpoints]?: T;
} {
  return typeof prop === "number" || typeof prop === "string"
    ? { base: prop }
    : prop;
}
