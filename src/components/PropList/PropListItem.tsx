import styles from "./styles.module.css";

type PropListItemProps = {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
};

export default function PropListItem({ name, type, defaultValue, description }: PropListItemProps) {
  return (
    <li>
      <div className={styles.header}>
        <h4 className={styles.name}>{name}</h4>
        <span>
          Type: <code>{type}</code>
        </span>
        {defaultValue ? (
          <span>
            Default: <code>{defaultValue}</code>
          </span>
        ) : null}
      </div>
      <p>{description}</p>
    </li>
  );
}
