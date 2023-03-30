"use client";

import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import { ContactFormDialog } from "~/contact-form/contact-form-dialog";
import { Button } from "~/ui";
import { PaperPlaneTilt } from "~/ui/icon";

export function NavigationContactButton() {
  const { scrollYProgress } = useScroll();
  const [isHalfwayPage, setIsHalfwayPage] = useState(false);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > 0.5) {
        setIsHalfwayPage(true);
      }
    });
  }, [scrollYProgress]);

  return (
    <ContactFormDialog>
      <Button
        iconLeft={PaperPlaneTilt}
        size="sm"
        variant={isHalfwayPage ? "primary" : "secondary"}
      >
        Contact
      </Button>
    </ContactFormDialog>
  );
}
