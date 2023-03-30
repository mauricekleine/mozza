"use client";

import { ContactFormDialog } from "@mk/contact-form/contact-form-dialog";
import { Button } from "@mk/ui";
import { PaperPlaneTilt } from "@mk/ui/icon";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

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
        variant={isHalfwayPage ? "primary" : "secondary"}
      >
        Contact
      </Button>
    </ContactFormDialog>
  );
}
