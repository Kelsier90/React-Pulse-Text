import styles from "./styles.module.css";
import NavItem from "./NavItem.tsx";
import NavContext from "./NavContext.ts";
import useScreenWidth from "../../hooks/useScreenWIdth.ts";

type NavProps = {
  isOpen: boolean;
  className?: string;
  onClose: () => void;
};

export default function Nav({ isOpen, className, onClose }: NavProps) {
  const screenWidth = useScreenWidth();

  return (
    <NavContext value={{ isOpen, isBurger: screenWidth <= 768 }}>
      <nav className={`${styles.root} ${isOpen ? styles.open : ""} ${className}`}>
        <ul>
          <NavItem text="Getting started" href="/getting-started" onNavigate={onClose} />
          <NavItem text="API reference" href="/api-reference" onNavigate={onClose} />
          <NavItem text="Playground" href="/playground" onNavigate={onClose} />
        </ul>
      </nav>
    </NavContext>
  );
}
