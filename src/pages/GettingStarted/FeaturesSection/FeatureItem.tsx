import { ReactNode } from "react";
import CheckIcon from "../../../components/icons/CheckIcon.tsx";

import styles from "./styles.module.css";

export default function FeatureItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li className={styles["feature-item"]}>
      <CheckIcon />{" "}
      <span>
        <strong>{title}</strong>: {children}
      </span>
    </li>
  );
}
