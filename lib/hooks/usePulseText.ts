import PulseTextProps from "../types/PulseTextProps.ts";
import { useCallback, useEffect, useRef, useState } from "react";
import PulseTextReturn from "../types/PulseTextReturn.ts";

export default function usePulseText({
  text,
  duration = 1000,
  delay = 0,
  iterationCount = 1,
  iterationDelay = 0,
  reverse = false,
  active = true,
  onStart,
  onChange,
  onEnd,
}: PulseTextProps): PulseTextReturn {
  const CURRENT_TEXT_DEFAULT = "";
  const CURRENT_ITERATION_DEFAULT = 1;

  const [currentText, setCurrentText] = useState<string>(CURRENT_TEXT_DEFAULT);
  const currentTextRef = useRef<string>(CURRENT_TEXT_DEFAULT);

  const intervalIdRef = useRef<any>(null);
  const timeoutIdRef = useRef<any>(null);

  const isStartedRef = useRef<boolean>(false);
  const isFinishedRef = useRef<boolean>(false);
  const currentIterationRef = useRef<number>(CURRENT_ITERATION_DEFAULT);
  const iterationTimeoutIdRef = useRef<any>(null);
  const isIterationDelayedRef = useRef<boolean>(false);

  const onStartRef = useRef(onStart);
  const onChangeRef = useRef(onChange);
  const onEndRef = useRef(onEnd);

  const isRunning = useCallback(() => timeoutIdRef.current !== null || intervalIdRef.current !== null, []);
  const isIterationEnded = useCallback(() => currentTextRef.current === text, [text]);

  const isOver = useCallback(
    () => currentIterationRef.current >= iterationCount && isIterationEnded(),
    [iterationCount, isIterationEnded],
  );

  const getNextLetter = useCallback(() => {
    if (isIterationEnded()) return "";
    return reverse ? text[text.length - currentTextRef.current.length - 1] : text[currentTextRef.current.length];
  }, [text, isIterationEnded, reverse]);

  const getNewText = useCallback(() => {
    if (isIterationEnded()) return "";
    const letter = getNextLetter();
    return reverse ? letter + currentTextRef.current : currentTextRef.current + letter;
  }, [getNextLetter, isIterationEnded, reverse]);

  const stopInterval = useCallback(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null;
    }

    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  }, []);

  const startInterval = useCallback(() => {
    if (!active || isFinishedRef.current || isRunning()) return;

    timeoutIdRef.current = setTimeout(
      () => {
        if (!isStartedRef.current) {
          if (onStartRef.current) onStartRef.current();
        }

        intervalIdRef.current = setInterval(() => {
          if (isIterationDelayedRef.current) return;

          const newText = getNewText();
          setCurrentText(newText);
          currentTextRef.current = newText;
          if (onChangeRef.current) {
            onChangeRef.current({
              text: newText,
              iteration: currentIterationRef.current,
            });
          }

          if (isOver()) {
            isFinishedRef.current = true;
            stopInterval();
            if (onEndRef.current) onEndRef.current();
          } else if (isIterationEnded()) {
            if (iterationDelay > 0) {
              isIterationDelayedRef.current = true;

              iterationTimeoutIdRef.current = setTimeout(() => {
                isIterationDelayedRef.current = false;
                currentIterationRef.current += 1;
              }, iterationDelay);
            } else {
              currentIterationRef.current += 1;
            }
          }
        }, duration / text.length);

        timeoutIdRef.current = null;
        isStartedRef.current = true;
      },
      isStartedRef.current ? 0 : delay,
    );
  }, [active, isRunning, getNewText, text, duration, delay, isIterationEnded, isOver, stopInterval]);

  const reset = useCallback(() => {
    stopInterval();

    setCurrentText(CURRENT_TEXT_DEFAULT);
    currentTextRef.current = CURRENT_TEXT_DEFAULT;
    currentIterationRef.current = CURRENT_ITERATION_DEFAULT;

    isStartedRef.current = false;
    isFinishedRef.current = false;
    isIterationDelayedRef.current = false;

    startInterval();
  }, [startInterval, stopInterval]);

  useEffect(() => {
    onStartRef.current = onStart;
  }, [onStart]);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    onEndRef.current = onEnd;
  }, [onEnd]);

  // Play or pause it when the active prop changes
  useEffect(() => {
    if (active) startInterval();
    else stopInterval();
  }, [startInterval, stopInterval, active]);

  // Reset when a prop is changed
  useEffect(() => {
    reset();
  }, [text, duration, iterationCount, reverse]);

  // Clear intervals and timeouts on unmount
  useEffect(
    () => () => {
      stopInterval();
      if (iterationTimeoutIdRef.current) clearInterval(iterationTimeoutIdRef.current);
    },
    [stopInterval],
  );

  return {
    reset,
    text: currentText,
  };
}
