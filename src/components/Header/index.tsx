import styles from "./styles.module.css";
import Nav from "../Nav";
import LightIcon from "../icons/LightIcon.tsx";
import GitHubIcon from "../icons/GitHubIcon.tsx";
import Container from "../Container";

export default function Header() {
  return (
    <header className={styles.root}>
      <Container className={styles.container}>
        <h1 className={styles.heading}>React Pulse Text</h1>
        <Nav />
        <div className={styles["actions-container"]}>
          <button type="button" className={styles["color-scheme-button"]}>
            <LightIcon />
          </button>
          <a
            href="https://github.com/Kelsier90/React-Pulse-Text"
            className={styles["github-button"]}
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <GitHubIcon />
          </a>
        </div>
      </Container>
    </header>
  );
}
