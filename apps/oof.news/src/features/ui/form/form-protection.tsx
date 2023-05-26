"use client";

import { useEffect, useRef } from "react";

import styles from "./form-protection.module.scss";

declare global {
  interface Window {
    turnstile: {
      render: (
        id: string,
        options: {
          callback: (token: string) => void;
          sitekey: string;
        }
      ) => void;
    };
  }
}

export function FormProtection() {
  const mounted = useRef<boolean>();

  useEffect(() => {
    if (!mounted.current) {
      window.turnstile.render("#cf-turnstile", {
        callback: function (token: string, ...args) {},
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string,
      });

      mounted.current = true;
    }
  }, []);

  return (
    <div className={styles["form-protection"]}>
      <div id="cf-turnstile" />
    </div>
  );
}
