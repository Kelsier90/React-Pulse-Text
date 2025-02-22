import ChevronRightIcon from "../icons/ChevronRightIcon.tsx";
import usePulseText from "../../../lib/hooks/usePulseText.ts";
import { useState } from "react";
import Link from "../Link";

export default function NavItem({ text, href }: { text: string; href: string }) {
  const [isHovered, setIsHovered] = useState(false);

  const { text: animatedText, reset } = usePulseText({
    text,
    duration: 200,
    active: isHovered,
  });

  return (
    <li
      onMouseEnter={() => {
        reset();
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href}>
        {isHovered ? animatedText : text} <ChevronRightIcon />
      </Link>
    </li>
  );
}
