import clsx from "clsx";

type Config = Record<string, Record<string, string>>;

type Variants<C extends Config> = {
  [name in keyof C]?: keyof C[name] extends "false" | "true"
    ? boolean
    : keyof C[name];
};

type OuterArgs<C extends Config> = {
  compoundVariants?: (Variants<C> & { class: string })[];
  defaultVariants?: Variants<C>;
  variants: C;
};

type InnerArgs<C extends Config> = Variants<C>;

export function clsxVariants<C extends Config>({
  compoundVariants,
  defaultVariants,
  variants,
}: OuterArgs<C>) {
  function generateClasses<Output extends string>(input?: InnerArgs<C>): Output;
  function generateClasses<Output extends string>(
    className?: string | string[],
    args?: InnerArgs<C>
  ): Output;
  function generateClasses<Output extends string>(
    inputOrClass?: InnerArgs<C> | string | string[],
    input?: InnerArgs<C>
  ): Output {
    const inputOrClassIsClass =
      typeof inputOrClass === "string" || Array.isArray(inputOrClass);
    const args = inputOrClassIsClass ? (input as InnerArgs<C>) : inputOrClass;
    const className = inputOrClassIsClass ? inputOrClass : undefined;

    const variantClasses = Object.keys(variants).map((variant) => {
      const variantConfig = variants[variant];
      const variantValue = args?.[variant] ?? defaultVariants?.[variant];

      if (variantValue !== undefined) {
        return variantConfig[String(variantValue)];
      }
    });

    const compoundVariantClasses = compoundVariants?.map((compoundVariant) => {
      const { class: className, ...variants } = compoundVariant;

      const compoundVariantsMatch = Object.keys(variants).every((variant) => {
        const compoundVariantValue = variants[variant];
        const variantValue = args?.[variant] ?? defaultVariants?.[variant];

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
    ) as Output;
  }

  return generateClasses;
}

export type VariantProps<C> = C extends (
  className: string,
  args: infer A
) => string
  ? A
  : never;
