import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';

/**
 * Animate the text you want
 *
 * @version 1.0.3
 * @author [Rubén Albarracín](https://github.com/Kelsier90)
 */
function PulseText({
  children, text, textProp = 'children', renderText = null, duration = 1000,
  delay = 0, iterationCount = 1, reverse = false, active = true,
  onStart = null, onChange = null, onEnd = null,
}) {
  const [currentText, setCurrentText] = useState('');
  const [currentRenderedText, setCurrentRenderedText] = useState('');
  const [intervalId, setIntervalId] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [currentIteration, setCurrentIteration] = useState(1);
  const currentTextRef = useRef(currentText);
  currentTextRef.current = currentText;
  const currentRenderedTextRef = useRef(currentRenderedText);
  currentRenderedTextRef.current = currentRenderedText;
  const intervalIdRef = useRef(intervalId);
  intervalIdRef.current = intervalId;
  const timeoutIdRef = useRef(timeoutId);
  timeoutIdRef.current = timeoutId;
  const isStartedRef = useRef(isStarted);
  isStartedRef.current = isStarted;
  const currentIterationRef = useRef(currentIteration);
  currentIterationRef.current = currentIteration;

  const isRunning = useCallback(
    () => timeoutIdRef.current !== null || intervalIdRef.current !== null,
    [timeoutIdRef, intervalIdRef],
  );
  const isIterationEnded = useCallback(
    () => currentTextRef.current === text,
    [currentTextRef, text],
  );

  const isOver = useCallback(
    () => currentIterationRef.current === iterationCount && isIterationEnded(),
    [currentIterationRef, iterationCount, isIterationEnded],
  );

  const getNextLetter = useCallback(
    () => {
      if (isIterationEnded()) return '';
      return reverse
        ? text[text.length - currentTextRef.current.length - 1]
        : text[currentTextRef.current.length];
    },
    [currentTextRef, text, isIterationEnded, reverse],
  );

  const getNewText = useCallback(
    () => {
      if (isIterationEnded()) return '';
      const letter = getNextLetter();
      return reverse
        ? letter + currentTextRef.current
        : currentTextRef.current + letter;
    },
    [currentTextRef, getNextLetter, isIterationEnded, reverse],
  );

  const getNewRenderedText = useCallback(
    () => {
      if (renderText === null) return getNewText();
      const isEmptyText = isIterationEnded();
      return renderText(
        isEmptyText ? '' : currentRenderedTextRef.current,
        isEmptyText ? '' : getNextLetter(),
        isEmptyText ? '' : currentTextRef.current,
        currentIterationRef.current,
      );
    }, [
      renderText, getNewText, currentRenderedTextRef, getNextLetter, currentTextRef,
      currentIterationRef, isIterationEnded
    ],
  );

  const stopInterval = useCallback(
    () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        setTimeoutId(null);
      }

      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
        setIntervalId(null);
      }
    },
    [timeoutIdRef, intervalIdRef],
  );

  const startInterval = useCallback(
    () => {
      if (isRunning()) return;

      const currentTimeOutId = setTimeout(() => {
        if (!isStartedRef.current) {
          if (onStart) onStart();
        }

        const currentIntervalId = setInterval(() => {
          const newText = getNewText();
          const newRenderedText = getNewRenderedText();
          const nextLetter = getNextLetter();
          setCurrentText(newText);
          setCurrentRenderedText(newRenderedText);
          if (onChange) onChange(newText, nextLetter, currentIterationRef.current);

          if (isOver()) {
            stopInterval();
            if (onEnd) onEnd();
          } else if (isIterationEnded()) {
            setCurrentIteration((iteration) => iteration + 1);
          }
        }, duration / text.length);
        setIntervalId(currentIntervalId);
        setTimeoutId(null);
        setIsStarted(true);
      }, isStartedRef.current ? 0 : delay);

      setTimeoutId(currentTimeOutId);
    },
    [
      isRunning, getNewText, getNewRenderedText, getNextLetter, text, duration, delay,
      currentIterationRef, isIterationEnded, isOver, stopInterval, onStart, onChange, onEnd,
    ],
  );

  useEffect(() => {
    if (active) startInterval();
    else stopInterval();
  }, [startInterval, stopInterval, active]);

  useEffect(() => () => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
    }
  }, []);

  return React.cloneElement(children, { [textProp]: currentRenderedText });
}

PulseText.propTypes = {
  /** The element that contains the text you want to animate */
  children: PropTypes.element.isRequired,
  /** The text you want to animate */
  text: PropTypes.string.isRequired,
  /** The child component property where the text is */
  textProp: PropTypes.string,
  /** Duration in ms of text animation */
  duration: PropTypes.number,
  /** Duration delay in ms of text animation */
  delay: PropTypes.number,
  /** Number of times the text is animated */
  iterationCount: PropTypes.number,
  /** If it's true the text will be animated from the last to the first letter */
  reverse: PropTypes.bool,
  /** Gets called when the text animation starts. */
  onStart: PropTypes.func,
  /**
   * Gets called when the text changes.
   *
   * @param {string} newText The raw new text (without html)<br/>
   * @param {string} newLetter The letter that was added)<br/>
   * @param {number} lap The current animation iteration */
  onChange: PropTypes.func,
  /** Gets called when the text animation ends. */
  onEnd: PropTypes.func,
  /**
   * Function used to customize the text that is rendered.
   *
   * @param {any} currentRenderedText The current text (with html)<br/>
   * @param {string} nextLetter The next letter to add<br/>
   * @param {string} currentRawText The raw current text (without html)<br/>
   * @param {number} lap The current animation iteration<br/>
   * @return {any} */
  renderText: PropTypes.func,
  /**
   * If it's false the animation is paused.
   *
   * You can change this property to pause or resume animation at any time. */
  active: PropTypes.bool,
};

export default PulseText;
