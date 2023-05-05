"use client";

import { PaperPlaneTilt } from "@mozza-icons/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import { ContactFormDialog } from "~/contact-form/contact-form-dialog";
import { Button } from "~/ui/button";

export function NavigationContactButton() {
  const { scrollYProgress } = useScroll();
  const [isHalfwayPage, setIsHalfwayPage] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.5) {
      setIsHalfwayPage(true);
    }
  });

  return (
    <ContactFormDialog>
      <Button size="sm" variant={isHalfwayPage ? "primary" : "secondary"}>
        <PaperPlaneTilt />

        <span>Contact</span>
      </Button>
    </ContactFormDialog>
  );
}
