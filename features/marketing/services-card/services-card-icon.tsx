import { Icon } from "~/design-system/icon";

export function ServicesCardIcon({ icon }: { icon: Icon }) {
  const Icon = icon;

  return (
    <div className="flex h-16 justify-center rounded-full">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10">
        <Icon className="h-10 w-10 text-slate-200" />
      </div>
    </div>
  );
}
