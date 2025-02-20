import { renderHook } from "@testing-library/react";
import usePulseText from "./usePulseText";

test("First test", () => {
  const { result } = renderHook(() =>
    usePulseText({
      text: "Hello World",
      duration: 1000,
      delay: 0,
      active: false,
    }),
  );

  // Initially, the currentText should be empty
  expect(result.current.text).toBe("");
});
