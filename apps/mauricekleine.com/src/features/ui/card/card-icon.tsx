import { Icon } from "@mozza-icons/react";

type Props = {
  icon: Icon;
};

export function CardIcon({ icon }: Props) {
  const Icon = icon;

  return (
    <div className="relative my-6 p-1 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-blue-700 before:via-blue-600 before:to-purple-700 before:blur-3xl">
      <Icon className="h-20 w-20 text-slate-200" />
    </div>
  );
}
