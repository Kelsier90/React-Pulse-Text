import styles from "./styles.module.css";
import NavItem from "./NavItem.tsx";

export default function Nav() {
  return (
    <nav className={styles.root}>
      <ul>
        <NavItem text="Getting started" href="/getting-started" />
        <NavItem text="API" href="/api" />
        <NavItem text="Playground" href="/playground" />
        <NavItem text="Examples" href="/examples" />
      </ul>
    </nav>
  );
}
