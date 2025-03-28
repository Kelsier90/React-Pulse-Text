import PulseTextProps from "../types/PulseTextProps";
import { useCallback, useEffect, useRef, useState } from "react";
import PulseTextReturn from "../types/PulseTextReturn";

export default function usePulseText({
  text,
  duration = 1000,
  delay = 0,
  iterationCount = 1,
  iterationDelay = 0,
  reverse = false,
  erase = false,
  active = true,
  onStart,
  onChange,
  onEnd,
}: PulseTextProps): PulseTextReturn {
  const CURRENT_TEXT_DEFAULT = erase ? text : "";
  const CURRENT_ITERATION_DEFAULT = 1;

  const [currentText, setCurrentText] = useState<string>(CURRENT_TEXT_DEFAULT);
  const currentTextRef = useRef<string>(CURRENT_TEXT_DEFAULT);

  const intervalIdRef = useRef<any>(null);
  const timeoutIdRef = useRef<any>(null);

  const isStartedRef = useRef<boolean>(false);
  const isFinishedRef = useRef<boolean>(false);
  const currentIterationRef = useRef<number>(CURRENT_ITERATION_DEFAULT);
  const iterationTimeoutIdRef = useRef<any>(null);

  const onStartRef = useRef(onStart);
  const onChangeRef = useRef(onChange);
  const onEndRef = useRef(onEnd);

  const eraseRef = useRef(erase);

  const isRunning = useCallback(() => timeoutIdRef.current !== null || intervalIdRef.current !== null, []);

  const isIterationEnded = useCallback(() => {
    if (eraseRef.current) {
      return currentTextRef.current.length === 0;
    } else {
      return currentTextRef.current.length === text.length;
    }
  }, [text]);

  const isOver = useCallback(
    () => currentIterationRef.current >= iterationCount && isIterationEnded(),
    [iterationCount, isIterationEnded],
  );

  const getNextLetter = useCallback(() => {
    if (isIterationEnded()) return "";

    if (reverse) {
      return text[text.length - currentTextRef.current.length - 1];
    } else {
      return text[currentTextRef.current.length];
    }
  }, [text, isIterationEnded, reverse]);

  const getNewText = useCallback(() => {
    if (isIterationEnded()) return eraseRef.current ? text : "";
    if (eraseRef.current) {
      return reverse ? currentTextRef.current.slice(1) : currentTextRef.current.slice(0, -1);
    } else {
      const letter = getNextLetter();
      return reverse ? letter + currentTextRef.current : currentTextRef.current + letter;
    }
  }, [text, getNextLetter, isIterationEnded, reverse]);

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

  const cancelIterationDelay = useCallback(() => {
    if (iterationTimeoutIdRef.current) {
      clearTimeout(iterationTimeoutIdRef.current);
      iterationTimeoutIdRef.current = null;
    }
  }, []);

  const startInterval = useCallback(() => {
    if (!active || isFinishedRef.current || isRunning()) return;

    const run = () => {
      intervalIdRef.current = setInterval(() => {
        if (!isStartedRef.current) {
          isStartedRef.current = true;
          if (onStartRef.current) onStartRef.current();
        }

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
          currentIterationRef.current += 1;

          if (iterationDelay > 0) {
            stopInterval();

            iterationTimeoutIdRef.current = setTimeout(() => {
              startInterval();
            }, iterationDelay);
          }
        }
      }, duration / text.length);

      timeoutIdRef.current = null;
    };

    if (!isStartedRef.current && delay > 0) {
      timeoutIdRef.current = setTimeout(run, delay);
    } else {
      run();
    }
  }, [active, isRunning, getNewText, text, duration, delay, isIterationEnded, isOver, stopInterval]);

  const reset = useCallback(() => {
    stopInterval();

    setCurrentText(CURRENT_TEXT_DEFAULT);
    currentTextRef.current = CURRENT_TEXT_DEFAULT;
    currentIterationRef.current = CURRENT_ITERATION_DEFAULT;

    isStartedRef.current = false;
    isFinishedRef.current = false;

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

  useEffect(() => {
    eraseRef.current = erase;
  }, [erase]);

  // Play or pause it when the active prop changes
  useEffect(() => {
    if (active) startInterval();
    else {
      cancelIterationDelay();
      cancelIterationDelay();
      stopInterval();
    }
  }, [active, cancelIterationDelay, startInterval, stopInterval]);

  // Reset when a prop is changed
  useEffect(() => {
    reset();
  }, [text, duration, iterationCount, reverse]);

  // Clear intervals and timeouts on unmount
  useEffect(
    () => () => {
      cancelIterationDelay();
      stopInterval();
    },
    [cancelIterationDelay, stopInterval],
  );

  return {
    reset,
    text: currentText,
  };
}
