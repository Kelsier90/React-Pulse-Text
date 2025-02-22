import Section from "../../../components/Section";
import usePulseText from "../../../../lib/hooks/usePulseText.ts";

import styles from "./styles.module.css";

export default function IntroductionSection() {
  const fullReactPulseText = "React Pulse Text";
  const { text: reactPulseText } = usePulseText({
    text: fullReactPulseText,
    duration: 2000,
    iterationCount: Infinity,
    iterationDelay: 1000,
  });

  return (
    <Section heading="Introduction">
      <span className={styles.title}>{reactPulseText || fullReactPulseText}</span>

      <p>
        The <code>usePulseText</code> hook is designed to create an animated text effect, where the content of a string
        progressively appears or disappears (erases) in a given pattern. This hook provides features such as specifying
        animation duration, delay, iteration count, and behavior like reversing the animation or erasing the text.
      </p>

      <p>
        It is well-suited for dynamic user interfaces to visually enhance text presentation by implementing pulsating or
        typing-like effects.
      </p>
    </Section>
  );
}
