import CheckIcon from "../../../components/icons/CheckIcon.tsx";
import usePulseText from "../../../../lib/hooks/usePulseText.ts";

import styles from "./styles.module.css";

type FeatureItemProps = {
  title: string;
  position: number;
  children: string;
};

export default function FeatureItem({ title, position, children }: FeatureItemProps) {
  const { text: featureDescription } = usePulseText({
    text: children,
    duration: 500,
    delay: position * 500,
  });

  return (
    <li className={styles["feature-item"]}>
      <CheckIcon />{" "}
      <span>
        <strong>{title}</strong>: {featureDescription}
      </span>
    </li>
  );
}
