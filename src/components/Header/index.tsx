import { useState } from "react";
import Nav from "../Nav";
import LightIcon from "../icons/LightIcon.tsx";
import GitHubIcon from "../icons/GitHubIcon.tsx";
import Container from "../Container";
import MenuIcon from "../icons/MenuIcon.tsx";
import useTheme from "../../hooks/useTheme.ts";
import DarkIcon from "../icons/DarkIcon.tsx";

import styles from "./styles.module.css";
import Link from "../Link";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const { theme, setTheme } = useTheme();

  return (
    <header className={styles.root}>
      <Container className={styles.container}>
        <div className={styles["heading-container"]}>
          <button type="button" onClick={() => setOpenMenu((v) => !v)} className={styles["menu-button"]}>
            <MenuIcon />
          </button>
          <h1 className={styles.heading}>
            <Link href="/">React Pulse Text</Link>
          </h1>
        </div>
        <Nav isOpen={openMenu} className={styles.nav} onClose={() => setOpenMenu(false)} />
        <div className={styles["actions-container"]}>
          <button
            type="button"
            className={styles["color-scheme-button"]}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <LightIcon /> : <DarkIcon />}
          </button>
          <a
            href="https://github.com/Kelsier90/React-Pulse-Text"
            className={styles["github-button"]}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
      </Container>
    </header>
  );
}
