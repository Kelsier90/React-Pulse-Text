import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [width, setWidth] = useState(() => screen.width);

  useEffect(() => {
    const onResize = () => {
      setWidth(screen.width);
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
}
