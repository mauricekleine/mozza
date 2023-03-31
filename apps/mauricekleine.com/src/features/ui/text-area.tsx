"use client";

import {
  TextArea as TextAreaBase,
  TextAreaProps,
  useFormContext,
} from "@mozza-ui/react";

type Props = TextAreaProps;

export function TextArea({ maxLength, rows = 3, ...props }: Props) {
  const { getValues } = useFormContext();
  const value = getValues(props.name);

  return (
    <div>
      <TextAreaBase
        className="block w-full rounded-md border-slate-400 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
        maxLength={maxLength}
        rows={rows}
        {...props}
      />

      {maxLength && maxLength > 0 ? (
        <p className="mt-1 text-right text-xs text-slate-400">
          <span>{value?.length}</span>

          <span>/</span>

          <span>{maxLength}</span>
        </p>
      ) : null}
    </div>
  );
}
