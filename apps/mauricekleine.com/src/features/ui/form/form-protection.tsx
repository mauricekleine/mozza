"use client";

import { useEffect, useRef } from "react";

import { useForm } from "./use-form";

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

  const { setVerificationToken } = useForm();

  useEffect(() => {
    if (!mounted.current) {
      window.turnstile.render("#cf-turnstile", {
        callback: function (token: string, ...args) {
          setVerificationToken(token);
        },
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY as string,
      });

      mounted.current = true;
    }
  }, []);

  return (
    <div className="relative h-16">
      <div
        className="absolute left-0 top-0 z-50 flex w-full items-center justify-center"
        id="cf-turnstile"
      />
    </div>
  );
}
