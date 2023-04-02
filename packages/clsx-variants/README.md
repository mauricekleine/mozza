<!-- About the project -->

## About the project

A tiny utility for constructing `className` variants conditionally. It uses the excellent [clsx](https://github.com/lukeed/clsx) package under the hood.

<!-- Installation -->

## Installation

- npm

  ```sh
  npm i clsx-variants
  ```

- pnpm

  ```sh
  pnpm i clsx-variants
  ```

- yarn
  ```sh
  yarn add clsx-variants
  ```

## Usage

```tsx
import type { ReactNode } from "react";
import { clsxVariants, VariantProps } from "clsx-variants";

const buttonVariants = clsxVariants({
  compoundVariants: [
    {
      variant: "primary",
      size: "sm",
      // apply a custom class for any combination of variants
      className: "bg-blue-500 text-white px-2 py-1 text-sm",
    },
  ],
  defaultVariant: {
    size: "md",
    variant: "primary",
  },
  variants: {
    // 'true' and 'false' are reserved for boolean variants. The `false` styles will only be applied if the variant is explicitly set to `false`.
    outline: {
      false: "border-none",
      true: "border-2 border-blue-500",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    },
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
    },
  },
});

type Props = VariantProps<typeof buttonVariants> & { children: ReactNode };

const Button = ({ children, outline, size, variant }: Props) => {
  return (
    <button
      className={buttonVariants({
        outline,
        size,
        variant,
      })}
    >
      {children}
    </button>
  );
};

const App = () => {
  return (
    <div>
      {/* { outline: undefined, size: 'md', variant: 'primary' } */}
      <Button />

      {/* { outline: undefined, size: 'md', variant: 'secondary' } */}
      <Button variant="secondary" />

      {/* { outline: undefined, size: 'lg', variant: 'primary' } */}
      <Button size="lg" variant="primary" />

      {/* { outline: true, size: 'sm', variant: 'primary' } */}
      <Button size="sm" variant="primary" outline />

      {/* { outline: false, size: 'sm', variant: 'primary' } */}
      <Button size="sm" variant="primary" outline={false} />
    </div>
  );
};

// VariantProps takes a second argument that specifies which of the variants are required
type AllPropsAreOptional = VariantProps<typeof buttonVariants>;
/* 
  {
    outline?: boolean | undefined;
    size?: "sm" | "md" | "lg" | undefined;
    variant?: "primary" | "secondary" | undefined;
  }
*/

type SomePropsAreRequired = VariantProps<
  typeof buttonVariants,
  "size" | "variant"
>;
/* 
  {
    outline?: boolean | undefined;
    size: "sm" | "md" | "lg";
    variant: "primary" | "secondary";
  }
*/
```
