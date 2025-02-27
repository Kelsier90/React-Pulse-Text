import ChevronRightIcon from "../icons/ChevronRightIcon.tsx";
import usePulseText from "../../../lib/hooks/usePulseText.ts";
import { useContext, useEffect, useState } from "react";
import Link from "../Link";
import NavContext from "./NavContext.ts";
import useRouteMatch from "../../hooks/useRouteMatch.ts";

import styles from "./styles.module.css";

export default function NavItem({ text, href }: { text: string; href: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, isBurger } = useContext(NavContext);

  const isActive = useRouteMatch(href);

  const isBurgerMenuOpen = isBurger && isOpen;

  const animate = isHovered || isBurgerMenuOpen;

  const { text: animatedText, reset: resetTextAnimation } = usePulseText({
    text,
    duration: isHovered ? 200 : 400,
    active: animate,
  });

  useEffect(() => {
    if (isBurgerMenuOpen) {
      resetTextAnimation();
    }
    resetTextAnimation();
  }, [isBurgerMenuOpen]);

  return (
    <li
      onMouseEnter={() => {
        resetTextAnimation();
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      className={isActive ? styles.active : undefined}
    >
      <Link href={href}>
        {animatedText || text} <ChevronRightIcon />
      </Link>
    </li>
  );
}
