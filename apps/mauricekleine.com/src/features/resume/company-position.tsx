import { format, formatDistance } from "date-fns";
import { useMemo } from "react";

import { Header, Text } from "~/ui";

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
      <Header as="h3">{title}</Header>

      <Text>{tenureString}</Text>

      <Text>{location}</Text>
    </div>
  );
}
