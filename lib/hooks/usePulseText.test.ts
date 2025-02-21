import { renderHook, act } from "@testing-library/react";
import usePulseText from "./usePulseText";

describe("usePulseText", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("initial state should have empty text when `active` is false", () => {
    const { result } = renderHook(() =>
      usePulseText({
        text: "Hello",
        duration: 1000,
        active: false,
      }),
    );

    expect(result.current.text).toBe(""); // The initial text should be empty
  });

  test("should update text progressively over time", () => {
    const { result } = renderHook(() =>
      usePulseText({
        text: "Hello",
        duration: 1000,
        active: true,
      }),
    );

    act(() => {
      jest.advanceTimersByTime(200); // Simulating enough time for one letter to appear
    });
    expect(result.current.text).toBe("H");

    act(() => {
      jest.advanceTimersByTime(200); // Another letter should appear now
    });
    expect(result.current.text).toBe("He");

    act(() => {
      jest.advanceTimersByTime(1000); // Simulate enough time for all letters
    });
    expect(result.current.text).toBe("Hello");
  });

  test("should respect delay before starting text update", () => {
    const { result } = renderHook(() =>
      usePulseText({
        text: "Hello",
        duration: 1000,
        delay: 500,
        active: true,
      }),
    );

    act(() => {
      jest.advanceTimersByTime(200); // Check before delay finishes
    });
    expect(result.current.text).toBe("");

    act(() => {
      jest.advanceTimersByTime(500); // After delay, update begins
    });
    expect(result.current.text).toBe("H");
  });

  test("should respect reverse option", () => {
    const { result } = renderHook(() =>
      usePulseText({
        text: "Hello",
        duration: 1000,
        reverse: true,
        active: true,
      }),
    );

    act(() => {
      jest.advanceTimersByTime(200); // First letter appears
    });
    expect(result.current.text).toBe("o");

    act(() => {
      jest.advanceTimersByTime(200); // Continuation of reverse text
    });
    expect(result.current.text).toBe("lo");
  });

  test("should trigger `onStart` callback once", () => {
    const onStart = jest.fn();

    renderHook(() =>
      usePulseText({
        text: "Hello",
        duration: 1000,
        active: true,
        onStart,
      }),
    );

    act(() => {
      jest.advanceTimersByTime(700); // Trigger the hook logic
    });

    expect(onStart).toHaveBeenCalledTimes(1); // `onStart` should be called exactly once
  });

  test("should trigger `onChange` callback with correct values", () => {
    const onChange = jest.fn();

    renderHook(() =>
      usePulseText({
        text: "Hello",
        duration: 1000,
        active: true,
        onChange,
      }),
    );

    act(() => {
      jest.advanceTimersByTime(200); // Advance to first letter
    });
    expect(onChange).toHaveBeenCalledWith({ text: "H", iteration: 1 });

    act(() => {
      jest.advanceTimersByTime(200); // Advance to second letter
    });
    expect(onChange).toHaveBeenLastCalledWith({ text: "He", iteration: 1 });
  });

  test("should stop after iteration count is reached", () => {
    const { result } = renderHook(() =>
      usePulseText({
        text: "Hi",
        duration: 400,
        active: true,
        iterationCount: 2,
      }),
    );

    act(() => {
      jest.advanceTimersByTime(1000); // Enough time for two iterations
    });
    expect(result.current.text).toBe("Hi");
  });

  test("should trigger `onEnd` callback after finishing iterations", () => {
    const onEnd = jest.fn();

    renderHook(() =>
      usePulseText({
        text: "Hi",
        duration: 400,
        active: true,
        iterationCount: 1,
        onEnd,
      }),
    );

    act(() => {
      jest.advanceTimersByTime(800); // Simulate total time passing
    });

    expect(onEnd).toHaveBeenCalledTimes(1);
  });

  test("should delay the next iteration by `iterationDelay`", () => {
    const onChange = jest.fn();

    const { result } = renderHook(() =>
      usePulseText({
        text: "Hi",
        duration: 400, // Each iteration spans 400ms divided evenly between chars
        iterationCount: 2, // Two iterations for the test
        iterationDelay: 500, // Delay between iterations
        active: true,
        onChange,
      }),
    );

    act(() => {
      jest.advanceTimersByTime(400); // Complete the first iteration (Hi done)
    });

    // After the first iteration, `onChange` should have been triggered twice
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange.mock.calls[1][0].text).toBe("Hi"); // Text is complete for iteration 1
    expect(result.current.text).toBe("Hi");

    act(() => {
      jest.advanceTimersByTime(400); // Move forward, but still within iteration delay
    });

    // The second iteration should not have started yet due to the 500ms delay
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(result.current.text).toBe("Hi");

    act(() => {
      // jest.advanceTimersByTime(500); // Finish the delay
      jest.advanceTimersByTime(300); // Finish the delay
    });

    // Now, the second iteration should start
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange.mock.calls[2][0].text).toBe(""); // Beginning of the second iteration
    expect(result.current.text).toBe("");
  });

  test("should erase text letter by letter if `erase` is true", () => {
    const { result } = renderHook(() =>
      usePulseText({
        text: "Hello",
        duration: 1000,
        erase: true,
        active: true,
      }),
    );

    // Initially, the text should be fully rendered
    expect(result.current.text).toBe("Hello");

    // Simulate erasing the text
    act(() => {
      jest.advanceTimersByTime(200); // Start erasing
    });
    expect(result.current.text).toBe("Hell");

    act(() => {
      jest.advanceTimersByTime(200); // Continue erasing
    });
    expect(result.current.text).toBe("Hel");

    act(() => {
      jest.advanceTimersByTime(600); // Finish erasing
    });
    expect(result.current.text).toBe("");
  });

  test("should leave text fully rendered if `erase` is false", () => {
    const { result } = renderHook(() =>
      usePulseText({
        text: "Hello",
        duration: 1000,
        erase: false,
        active: true,
      }),
    );

    // Simulate text rendering (each letter takes part of duration)
    act(() => {
      jest.advanceTimersByTime(200); // First letter
    });
    expect(result.current.text).toBe("H");

    act(() => {
      jest.advanceTimersByTime(800); // Text is fully rendered
    });
    expect(result.current.text).toBe("Hello");

    act(() => {
      jest.advanceTimersByTime(1000); // Check if text remains after render
    });
    expect(result.current.text).toBe("Hello");
  });

  test("should immediately start erasing text if active is set to true after rendering", () => {
    const { result, rerender } = renderHook(
      ({ active }) =>
        usePulseText({
          text: "Hello",
          duration: 1000,
          erase: true,
          active,
        }),
      {
        initialProps: { active: false },
      },
    );

    // Fully render the text
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current.text).toBe("Hello");

    // Now, toggle `active` to true
    rerender({ active: true });

    // Erase text immediately
    act(() => {
      jest.advanceTimersByTime(200); // Start erasing
    });
    expect(result.current.text).toBe("Hell");

    act(() => {
      jest.advanceTimersByTime(800); // Continue erasing
    });
    expect(result.current.text).toBe(""); // Fully erased
  });

  test("should immediately start erasing text if `erase` is set to true after rendering", () => {
    const { result, rerender } = renderHook(
      ({ erase }) =>
        usePulseText({
          text: "Hello",
          duration: 1000,
          erase,
          active: true,
        }),
      {
        initialProps: { erase: false },
      },
    );

    // Simulate full text rendering
    act(() => {
      jest.advanceTimersByTime(200); // 'H'
    });
    expect(result.current.text).toBe("H");

    act(() => {
      jest.advanceTimersByTime(400); // 'Hel'
    });
    expect(result.current.text).toBe("Hel");

    // Toggle `erase` to true
    rerender({ erase: true });

    // Start erasing one letter at a time
    act(() => {
      jest.advanceTimersByTime(200); // Remove last letter: 'He'
    });
    expect(result.current.text).toBe("He");

    act(() => {
      jest.advanceTimersByTime(200); // Remove next letter: 'H'
    });
    expect(result.current.text).toBe("H");

    act(() => {
      jest.advanceTimersByTime(200); // Continue erasing
    });
    expect(result.current.text).toBe(""); // Fully erased
  });

  test("should start with full text and remove the first letter per tick when `erase` and `reverse` are true", () => {
    const { result } = renderHook(() =>
      usePulseText({
        text: "Hello",
        duration: 1000,
        reverse: true, // Render text in reverse
        erase: true, // Erase from the beginning
        active: true,
      }),
    );

    // Initially, the text should be fully rendered
    expect(result.current.text).toBe("Hello");

    // Process each tick => Remove the first letter instead of the last
    act(() => {
      jest.advanceTimersByTime(200); // Remove 'H'
    });
    expect(result.current.text).toBe("ello");

    act(() => {
      jest.advanceTimersByTime(200); // Remove 'e'
    });
    expect(result.current.text).toBe("llo");

    act(() => {
      jest.advanceTimersByTime(200); // Remove 'l'
    });
    expect(result.current.text).toBe("lo");

    act(() => {
      jest.advanceTimersByTime(200); // Remove 'l'
    });
    expect(result.current.text).toBe("o");

    act(() => {
      jest.advanceTimersByTime(200); // Remove 'o'
    });
    expect(result.current.text).toBe("");
  });

  test("should start fully rendered on each iteration when `erase` is true", () => {
    const { result } = renderHook(() =>
      usePulseText({
        text: "Hello",
        duration: 1000,
        erase: true,
        iterationCount: 3,
        iterationDelay: 500,
        active: true,
      }),
    );

    // First iteration: Text is fully rendered at the start
    expect(result.current.text).toBe("Hello");

    // Erase one letter per tick
    act(() => {
      jest.advanceTimersByTime(200); // Remove 'o'
    });
    expect(result.current.text).toBe("Hell");

    act(() => {
      jest.advanceTimersByTime(200); // Remove 'l'
    });
    expect(result.current.text).toBe("Hel");

    act(() => {
      jest.advanceTimersByTime(600); // Complete erasure ('Hello' -> '')
    });
    expect(result.current.text).toBe("");

    // After the first iteration, apply the `iterationDelay`
    act(() => {
      jest.advanceTimersByTime(700); // Delay before the second iteration starts
    });

    // Second iteration: Text is fully rendered again and starts erasing
    expect(result.current.text).toBe("Hello");

    act(() => {
      jest.advanceTimersByTime(200); // Remove 'o'
    });
    expect(result.current.text).toBe("Hell");

    act(() => {
      jest.advanceTimersByTime(800); // Complete erasure ('Hello' -> '')
    });
    expect(result.current.text).toBe("");

    // After the second iteration, apply the `iterationDelay`
    act(() => {
      jest.advanceTimersByTime(700); // Delay before the third and final iteration starts
    });

    // Third iteration: Text is fully rendered again and starts erasing
    expect(result.current.text).toBe("Hello");

    act(() => {
      jest.advanceTimersByTime(1000); // Erase the text completely during the last iteration
    });
    expect(result.current.text).toBe("");

    act(() => {
      jest.advanceTimersByTime(400); // The text is still empty
    });
    expect(result.current.text).toBe("");
  });

  test("should reset text and iteration count when `reset` is called", () => {
    const { result } = renderHook(() =>
      usePulseText({
        text: "Hello",
        duration: 1000,
        active: true,
      }),
    );

    act(() => {
      jest.advanceTimersByTime(200); // Simulate advancement to start updating text
    });
    expect(result.current.text).toBe("H");

    act(() => {
      result.current.reset(); // Call the reset method
    });
    expect(result.current.text).toBe(""); // Should reset text to default
  });

  test("should reset when `text` changes", () => {
    const { result, rerender } = renderHook(
      ({ text }) =>
        usePulseText({
          text,
          duration: 1000,
          iterationCount: 1,
          reverse: false,
          active: true,
        }),
      {
        initialProps: { text: "Hello" },
      },
    );

    act(() => {
      jest.advanceTimersByTime(200); // Allow text to partially render
    });
    expect(result.current.text).toBe("H"); // Some part of "Hello" has rendered

    // Rerender the hook with a new `text` value
    rerender({ text: "World" });

    // The text should reset to the default empty string
    expect(result.current.text).toBe("");
  });

  test("should reset when `duration` changes", () => {
    const { result, rerender } = renderHook(
      ({ duration }) =>
        usePulseText({
          text: "Hello",
          duration,
          iterationCount: 1,
          reverse: false,
          active: true,
        }),
      {
        initialProps: { duration: 1000 },
      },
    );

    act(() => {
      jest.advanceTimersByTime(400); // Allow partial progress
    });
    expect(result.current.text).toBe("He"); // Part of "Hello" has rendered

    // Rerender the hook with a new `duration` value
    rerender({ duration: 2000 });

    // The text should reset
    expect(result.current.text).toBe("");
  });

  test("should reset when `iterationCount` changes", () => {
    const { result, rerender } = renderHook(
      ({ iterationCount }) =>
        usePulseText({
          text: "Hi",
          duration: 1000,
          iterationCount,
          reverse: false,
          active: true,
        }),
      {
        initialProps: { iterationCount: 1 },
      },
    );

    act(() => {
      jest.advanceTimersByTime(500); // Allow text to render partially
    });
    expect(result.current.text).toBe("H");

    // Rerender with a different `iterationCount`
    rerender({ iterationCount: 2 });

    // The text should reset
    expect(result.current.text).toBe("");
  });

  test("should reset when `reverse` changes", () => {
    const { result, rerender } = renderHook(
      ({ reverse }) =>
        usePulseText({
          text: "Hello",
          duration: 1000,
          iterationCount: 1,
          reverse,
          active: true,
        }),
      {
        initialProps: { reverse: false },
      },
    );

    act(() => {
      jest.advanceTimersByTime(400); // Allow partial progress
    });
    expect(result.current.text).toBe("He"); // Part of "Hello" has rendered

    // Rerender the hook with `reverse` set to true
    rerender({ reverse: true });

    // The text should reset
    expect(result.current.text).toBe("");
  });
});
