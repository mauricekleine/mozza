type Props = {
  children: string;
};

export function Tag({ children }: Props) {
  return (
    <span className="rounded-md bg-primary-700 px-2 py-1 text-xs uppercase tracking-tight text-primary-300">
      {children}
    </span>
  );
}
