import { Cat } from "~/ui/icon";

type Props = {
  icon: typeof Cat;
};

export function CardIcon({ icon }: Props) {
  const Icon = icon;

  return (
    <div className="relative my-6 p-1 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-blue-600 before:blur-3xl">
      <Icon className="h-20 w-20 text-white/75" />
    </div>
  );
}
