import { VariantProps, clsxVariants } from "clsx-variants";
import { ElementType, ReactNode } from "react";

type Props<V extends ReturnType<typeof clsxVariants>> = VariantProps<V> & {
  as: ElementType;
  children: ReactNode;
  variants: V;
};

export function As<V extends ReturnType<typeof clsxVariants>>({
  as,
  children,
  className: classNameProp = "",
  variants,
  ...props
}: Props<V> & { className?: string }) {
  const Element = as;
  const className = variants(classNameProp, { as: as as string, ...props });

  return <Element className={className}>{children}</Element>;
}

export type { Props as AsProps };
