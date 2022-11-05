"use client";

import { Card } from "~/ui/card";
import { Package } from "~/ui/icon";
import { Stack } from "~/ui/layout";

export function ServicesCard() {
  return (
    <Card>
      <Card.Icon icon={Package} />

      <Card.Title>My services</Card.Title>
    </Card>
  );
}
