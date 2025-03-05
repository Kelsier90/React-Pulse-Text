import { useId } from "react";

import styles from "./styles.module.css";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  const id = useId();

  return (
    <div className={styles.root}>
      <input id={id} type="checkbox" checked={checked} onChange={(ev) => onChange(ev.target.checked)} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
