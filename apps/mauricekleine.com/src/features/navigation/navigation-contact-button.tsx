"use client";

import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import { ContactFormDialog } from "@mk/contact-form/contact-form-dialog";
import { Button } from "@mk/design-system";
import { PaperPlaneTilt } from "@mk/design-system/icon";

export function NavigationContactButton() {
  const { scrollYProgress } = useScroll();
  const [isHalfwayPage, setIsHalfwayPage] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.5) {
        setIsHalfwayPage(true);
      }
    });
  }, []);

  return (
    <ContactFormDialog>
      <Button
        iconLeft={PaperPlaneTilt}
        size="sm"
        variant={isHalfwayPage ? "solid" : "outline"}
      >
        Contact
      </Button>
    </ContactFormDialog>
  );
}
