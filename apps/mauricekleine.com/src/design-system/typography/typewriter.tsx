"use client";

import { useEffect, useRef, useState } from "react";

import { Text } from "./text";

const ERASE_SPEED = 75;
const WRITE_SPEED = 300;

type Props = {
  text: string | string[];
};

export function Typewriter({ text }: Props) {
  const textIndex = useRef(0);

  const [cursorSpeed, setCursorSpeed] = useState(WRITE_SPEED);
  const [isErasing, setIsErasing] = useState(false);
  const [textToRender, setTextToRender] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const subText = Array.isArray(text) ? text[textIndex.current] : text;

      const shouldContinueErasing = isErasing && textToRender !== "";
      const shouldStopErasing = isErasing && textToRender === "";
      const shouldContinueWriting =
        !isErasing && textToRender.length !== subText.length;
      const shouldStopWriting =
        !isErasing && textToRender.length === subText.length;

      if (shouldContinueWriting) {
        setTextToRender(
          (textToRender) =>
            `${textToRender}${subText.slice(
              textToRender.length,
              textToRender.length + 1
            )}`
        );

        return;
      }

      if (shouldStopWriting) {
        setCursorSpeed(ERASE_SPEED);
        setIsErasing(true);

        return;
      }

      if (shouldContinueErasing) {
        setTextToRender((textToRender) => textToRender.slice(0, -1));

        return;
      }

      if (shouldStopErasing) {
        setCursorSpeed(WRITE_SPEED);
        setIsErasing(false);

        if (Array.isArray(text)) {
          textIndex.current =
            textIndex.current === text.length - 1 ? 0 : textIndex.current + 1;
        }

        return;
      }
    }, cursorSpeed);

    return () => {
      clearTimeout(intervalId);
    };
  }, [cursorSpeed, isErasing, text, textToRender]);

  return (
    <>
      <Text color={400} serif size="2xl" tracking="tight" weight="semibold">
        {textToRender}
      </Text>

      <span className="-ml-1 animate-blink border-r border-r-slate-200"></span>
    </>
  );
}
