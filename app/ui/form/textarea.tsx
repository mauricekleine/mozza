import {
  ChangeEventHandler,
  ComponentProps,
  ReactNode,
  useRef,
  useState,
} from "react";

type IntrinsicTextareaProps = ComponentProps<"textarea">;

type Props = {
  maxLength?: IntrinsicTextareaProps["maxLength"];
  minLength?: IntrinsicTextareaProps["minLength"];
  name: IntrinsicTextareaProps["name"];
  placeholder: IntrinsicTextareaProps["placeholder"];
  required?: IntrinsicTextareaProps["required"];
  rows?: IntrinsicTextareaProps["rows"];
};

export function Textarea({ maxLength, rows = 3, ...props }: Props) {
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    if (maxLength && maxLength > 0) {
      setCharacterCount(event.currentTarget.value.length);
    }
  };

  return (
    <div>
      <textarea
        className="block w-full rounded-md border-slate-400 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
        onChange={handleChange}
        maxLength={maxLength}
        rows={rows}
        {...props}
      />

      {maxLength && maxLength > 0 ? (
        <p className="mt-1 text-right text-xs text-slate-400">
          <span>{characterCount}</span>

          <span>/</span>

          <span>{maxLength}</span>
        </p>
      ) : null}
    </div>
  );
}
