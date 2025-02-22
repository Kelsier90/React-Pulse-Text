import { ReactNode, useMemo } from "react";

import styles from "./styles.module.css";
import { getSlug } from "../../utils/slug.ts";

export default function Section({ heading, children }: { heading: string; children: ReactNode }) {
  const headingSlug = useMemo(() => getSlug(heading), [heading]);

  return (
    <section className={styles.root}>
      <h3 id={headingSlug}>{heading}</h3>
      {children}
    </section>
  );
}
