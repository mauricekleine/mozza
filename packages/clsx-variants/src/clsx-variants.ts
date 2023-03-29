import clsx from "clsx";

type Config = Record<string, Record<string, string>>;

type Variants<C extends Config> = {
  [name in keyof C]?: keyof C[name];
};

type OuterArgs<C extends Config> = {
  compoundVariants?: (Variants<C> & { className: string })[];
  defaultVariants?: Variants<C>;
  variants: C;
};

type InnerArgs<C extends Config> = Variants<C>;

export function clsxVariants<C extends Config>({
  compoundVariants,
  defaultVariants,
  variants,
}: OuterArgs<C>) {
  function generateClassNames(input: InnerArgs<C>): string;
  function generateClassNames(className: string, args: InnerArgs<C>): string;
  function generateClassNames(
    inputOrClassName: InnerArgs<C> | string,
    input?: InnerArgs<C>
  ): string {
    const args =
      typeof inputOrClassName === "string"
        ? (input as InnerArgs<C>)
        : inputOrClassName;
    const className =
      typeof inputOrClassName === "string" ? inputOrClassName : undefined;

    const variantClasses = Object.keys(variants).map((variant) => {
      const variantConfig = variants[variant];
      const variantValue = args[variant] ?? defaultVariants?.[variant];

      if (variantValue) {
        return variantConfig[variantValue as string];
      }
    });

    const compoundVariantClasses = compoundVariants?.map((compoundVariant) => {
      const { className, ...variants } = compoundVariant;

      const compoundVariantsMatch = Object.keys(variants).every((variant) => {
        const compoundVariantValue = variants[variant];
        const variantValue = args[variant] ?? defaultVariants?.[variant];

        return compoundVariantValue === variantValue;
      });

      if (compoundVariantsMatch) {
        return className;
      }
    });

    return clsx(
      className,
      ...variantClasses,
      ...(compoundVariantClasses ?? [])
    );
  }

  return generateClassNames;
}

export type VariantProps<C> = C extends (
  className: string,
  args: infer A
) => string
  ? A
  : never;
