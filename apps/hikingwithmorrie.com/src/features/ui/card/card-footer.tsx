import { CaretRight } from "@mozza-icons/react";

import { Text } from "~/ui";

type Props = {
  children: string | string[];
};

export function CardFooter({ children }: Props) {
  return (
    <div className="group-hover:text-green-dark flex items-center justify-end p-4 transition-colors sm:px-6">
      <Text as="span" size="sm">
        {children}
      </Text>

      <CaretRight className="mt-[1px] h-3 w-3 transition-all group-hover:-mr-1 group-hover:ml-1" />
    </div>
  );
}
