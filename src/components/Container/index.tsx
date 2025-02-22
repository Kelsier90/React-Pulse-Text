import { ComponentProps } from "react";

import styles from "./styles.module.css";

type ContainerProps = ComponentProps<"div">;

export default function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div className={`${styles.root} ${className}`} {...rest}>
      {children}
    </div>
  );
}
