type Props = {
  children: string;
};

export function Tag({ children }: Props) {
  return (
    <span className="bg-primary-200 px-2 py-1 rounded-md text-primary-600 text-xs tracking-tight uppercase dark:bg-primary-700 dark:text-primary-300">
      {children}
    </span>
  );
}
