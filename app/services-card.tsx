"use client";

import { Package } from "phosphor-react";

import { Card } from "~/ui/card";
import { Stack } from "~/ui/layout";

export function ServicesCard() {
  return (
    <Card>
      <Card.Icon icon={Package} />

      <Card.Title>My services</Card.Title>
    </Card>
  );
}
