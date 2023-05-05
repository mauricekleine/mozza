import styles from "./label.module.css";

type Props = {
  children: string;
  htmlFor: string;
};

export function Label({ children, htmlFor }: Props) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
