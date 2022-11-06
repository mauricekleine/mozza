import { IconProps } from "phosphor-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type Props = {
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
};

export function CardIcon({ icon }: Props) {
  const Icon = icon;

  return (
    <div className="relative my-6 p-1 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-blue-600 before:via-blue-600 before:to-purple-600 before:blur-3xl">
      <Icon className="h-20 w-20 text-white/90" />
    </div>
  );
}
