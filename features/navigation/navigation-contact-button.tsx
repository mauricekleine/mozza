"use client";

import { useCallback, useEffect, useState } from "react";

import { Button } from "~/design-system";
import { PaperPlaneTilt } from "~/design-system/icon";

import { ContactFormDialog } from "~/contact-form/contact-form-dialog";

export function NavigationContactButton() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const scrollListener = useCallback(() => {
    const scrollHeight = document.scrollingElement?.scrollHeight ?? 1;
    const scrollTop = document.scrollingElement?.scrollTop ?? 0;

    setScrollPercentage(scrollTop / scrollHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [scrollListener]);

  return (
    <ContactFormDialog>
      <Button
        iconLeft={PaperPlaneTilt}
        size="sm"
        variant={scrollPercentage > 0.5 ? "solid" : "outline"}
      >
        Contact
      </Button>
    </ContactFormDialog>
  );
}
