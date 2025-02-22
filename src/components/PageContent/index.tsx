import { ReactNode } from "react";
import usePulseText from "../../../lib/hooks/usePulseText.ts";
import Container from "../Container";

import styles from "./styles.module.css";
import { getSlug } from "../../utils/slug.ts";

type PageContentProps = {
  heading: string;
  sections?: string[];
  children: ReactNode;
};

export default function PageContent({ heading, sections, children }: PageContentProps) {
  const { text: animatedHeading } = usePulseText({
    text: heading,
    duration: 600,
  });

  const renderSections = () => {
    if (!sections) return null;

    return (
      <aside className={styles["sections-container"]}>
        <h3>On this page</h3>
        <ul>
          {sections.map((section) => (
            <li key={section}>
              <a href={`#${getSlug(section)}`}>{section}</a>
            </li>
          ))}
        </ul>
      </aside>
    );
  };

  return (
    <main>
      <Container className={styles.container}>
        <div>
          <h2>{animatedHeading || "_"}</h2>
          {children}
        </div>
        {renderSections()}
      </Container>
    </main>
  );
}
