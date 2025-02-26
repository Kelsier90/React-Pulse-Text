import { useState } from "react";
import Nav from "../Nav";
import LightIcon from "../icons/LightIcon.tsx";
import GitHubIcon from "../icons/GitHubIcon.tsx";
import Container from "../Container";
import MenuIcon from "../icons/MenuIcon.tsx";

import styles from "./styles.module.css";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={styles.root}>
      <Container className={styles.container}>
        <div className={styles["heading-container"]}>
          <button type="button" onClick={() => setOpenMenu((v) => !v)} className={styles["menu-button"]}>
            <MenuIcon />
          </button>
          <h1 className={styles.heading}>React Pulse Text</h1>
        </div>
        <Nav isOpen={openMenu} className={styles.nav} />
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
