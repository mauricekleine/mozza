import { Icon } from "~/design-system/icon";

export function ServicesCardIcon({ icon }: { icon: Icon }) {
  const Icon = icon;

  return (
    <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-slate-200/10 to-black sm:h-16 sm:w-16">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200/10 sm:h-16 sm:w-16">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/20 sm:h-14 sm:w-14">
          <div className="h-10 w-10 rounded-full border border-slate-200/40 sm:h-12 sm:w-12"></div>
        </div>
      </div>

      <Icon className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-slate-300 sm:h-8 sm:w-8" />
    </div>
  );
}
