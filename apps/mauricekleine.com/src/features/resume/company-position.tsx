import { format, formatDistance } from "date-fns";
import { useMemo } from "react";

import { Heading, Text } from "@mk/design-system";

type Props = {
  endDate?: string;
  location: string;
  startDate: string;
  title: string;
};

export function CompanyPosition({
  endDate,
  location,
  startDate,
  title,
}: Props) {
  const tenureString = useMemo(() => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    return `${format(start, "MMM yyyy")} - ${
      endDate ? format(end, "MMM yyyy") : "Present"
    } · ${formatDistance(start, end)}`;
  }, [endDate, startDate]);

  return (
    <div>
      <Heading as="h3">{title}</Heading>

      <Text as="p">{tenureString}</Text>

      <Text as="p">{location}</Text>
    </div>
  );
}
