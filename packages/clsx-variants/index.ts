import clsx from "clsx";

type Config = Record<string, Record<string, string>>;

type Variants<C extends Config> = {
  [name in keyof C]?: keyof C[name];
};

type CompoundVariant<C extends Config> = Variants<C> & { className: string };
type DefaultVariants<C extends Config> = Variants<C>;

type OuterArgs<C extends Config> = {
  compoundVariants?: CompoundVariant<C>[];
  defaultVariants?: DefaultVariants<C>;
  variants: C;
};

type InnerArgs<C extends Config> = Variants<C>;

export function clsxVariants<C extends Config>(outerArgs: OuterArgs<C>) {
  return (innerArgs: InnerArgs<C>): string => {
    const { compoundVariants, defaultVariants, variants } = outerArgs;
    const { className, ...args } = innerArgs;

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

    return clsx(...variantClasses, ...(compoundVariantClasses ?? []));
  };
}
