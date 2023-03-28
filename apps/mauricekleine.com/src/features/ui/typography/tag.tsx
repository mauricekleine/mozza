type Props = {
  children: string;
};

export function Tag({ children }: Props) {
  return (
    <p className="whitespace-nowrap rounded-md bg-slate-700 px-2 py-1 text-xs uppercase tracking-tight text-slate-300">
      {children}
    </p>
  );
}
