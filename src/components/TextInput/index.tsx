import { ComponentProps, useId } from "react";

import styles from "./styles.module.css";

type TextInputProps = ComponentProps<"input"> & {
  label: string;
};

export default function TextInput({ label, ...rest }: TextInputProps) {
  const id = useId();

  return (
    <div className={styles.root}>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...rest} />
    </div>
  );
}
