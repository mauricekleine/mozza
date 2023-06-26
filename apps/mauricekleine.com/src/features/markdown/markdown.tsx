import { marked } from "marked";

const renderer = new marked.Renderer();

renderer.link = (href, _, text) => {
  return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
};

type Props = {
  children: string;
};

export function Markdown({ children }: Props) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(children, {
          headerIds: false,
          mangle: false,
          renderer: renderer,
        }),
      }}
    />
  );
}
