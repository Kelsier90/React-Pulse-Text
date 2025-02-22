import CopyIcon from "../icons/CopyIcon.tsx";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { copyToClipboard } from "../../utils/clipboard.ts";
import CheckIcon from "../icons/CheckIcon.tsx";
import usePulseText from "../../../lib/hooks/usePulseText.ts";

export default function CodeSnippet({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  const { text: animatedCopiedText, reset: resetAnimatedCopiedText } = usePulseText({
    text: "Copied",
    duration: 100,
    active: copied,
  });

  const handleCopy = () => {
    copyToClipboard(children).then(() => {
      resetAnimatedCopiedText();
      setCopied(true);
    });
  };

  useEffect(() => {
    if (copied) {
      const to = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(to);
    }
  }, [copied]);

  return (
    <div className={styles.root}>
      <pre>{children}</pre>
      <div className={styles["copy-button-container"]}>
        <button type="button" className={styles["copy-button"]} title="Copy" onClick={handleCopy}>
          {copied ? (
            <>
              <CheckIcon /> {animatedCopiedText}
            </>
          ) : (
            <CopyIcon />
          )}
        </button>
      </div>
    </div>
  );
}
