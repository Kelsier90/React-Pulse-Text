import PageContent from "../../components/PageContent";

import styles from "./styles.module.css";
import usePulseText from "../../../lib/hooks/usePulseText.ts";
import { useMemo, useState } from "react";
import TextInput from "../../components/TextInput";
import Checkbox from "../../components/Checkbox";
import ResetIcon from "../../components/icons/ResetIcon.tsx";
import CodeSnippet from "../../components/CodeSnippet";
import { getCode } from "../../utils/code.ts";
import CodeIcon from "../../components/icons/CodeIcon.tsx";

export default function Playground() {
  const [text, setText] = useState("React pulse text");
  const [duration, setDuration] = useState(2000);
  const [delay, setDelay] = useState(0);
  const [iterationCount, setIterationCount] = useState(1);
  const [iterationDelay, setIterationDelay] = useState(0);
  const [active, setActive] = useState(true);
  const [reverse, setReverse] = useState(false);
  const [erase, setErase] = useState(false);

  const [showCode, setShowCode] = useState(() => screen.width > 425);

  const { text: animatedText, reset } = usePulseText({
    text,
    duration,
    delay,
    iterationCount,
    iterationDelay,
    active,
    reverse,
    erase,
  });

  const code = useMemo(() => {
    return getCode({ text, duration, delay, iterationCount, iterationDelay, active, reverse, erase });
  }, [text, duration, delay, iterationCount, iterationDelay, active, reverse, erase]);

  return (
    <PageContent heading="Playground">
      <section className={styles.root}>
        <div className={styles.renderer}>
          <span className={styles["rendered-text"]}>{animatedText}</span>
          {showCode ? <CodeSnippet>{code}</CodeSnippet> : null}
          <div className={styles["renderer-actions"]}>
            <button
              type="button"
              title="Toggle code"
              className={`${styles["toggle-code-button"]} ${showCode ? styles.active : ""}`}
              onClick={() => setShowCode((v) => !v)}
            >
              <CodeIcon />
            </button>
            <button type="button" title="Reset" onClick={reset}>
              <ResetIcon />
            </button>
          </div>
        </div>
        <div className={styles.options}>
          <TextInput label="text" value={text} onChange={(ev) => setText(ev.target.value)} required />

          <TextInput
            type="number"
            label="duration"
            value={duration}
            onChange={(ev) => setDuration(parseInt(ev.target.value))}
            required
            min={0}
          />

          <TextInput
            type="number"
            label="delay"
            value={delay}
            onChange={(ev) => setDelay(parseInt(ev.target.value))}
            required
            min={0}
          />

          <TextInput
            type="number"
            label="iterationCount"
            value={iterationCount}
            onChange={(ev) => setIterationCount(parseInt(ev.target.value))}
            required
            min={1}
          />

          <TextInput
            type="number"
            label="iterationDelay"
            value={iterationDelay}
            onChange={(ev) => setIterationDelay(parseInt(ev.target.value))}
            required
            min={0}
          />

          <Checkbox label="active" checked={active} onChange={setActive} />

          <Checkbox label="reverse" checked={reverse} onChange={setReverse} />

          <Checkbox label="erase" checked={erase} onChange={setErase} />
        </div>
      </section>
    </PageContent>
  );
}
