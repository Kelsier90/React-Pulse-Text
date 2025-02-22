import { ReactNode } from "react";

import styles from "./styles.module.css";

export default function PropList({ children }: { children: ReactNode }) {
  return <ul className={styles.root}>{children}</ul>;
}
