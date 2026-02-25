import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <span className={styles.logo}>andresch.dev</span>
      </div>
    </header>
  );
}
