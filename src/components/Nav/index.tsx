import styles from "./styles.module.css";
import NavItem from "./NavItem.tsx";
import NavContext from "./NavContext.ts";
import useScreenWidth from "../../hooks/useScreenWIdth.ts";

type NavProps = {
  isOpen: boolean;
  className?: string;
};

export default function Nav({ isOpen, className }: NavProps) {
  const screenWidth = useScreenWidth();

  return (
    <NavContext value={{ isOpen, isBurger: screenWidth <= 768 }}>
      <nav className={`${styles.root} ${isOpen ? styles.open : ""} ${className}`}>
        <ul>
          <NavItem text="Getting started" href="/getting-started" />
          <NavItem text="API" href="/api" />
          <NavItem text="Playground" href="/playground" />
          <NavItem text="Examples" href="/examples" />
        </ul>
      </nav>
    </NavContext>
  );
}
