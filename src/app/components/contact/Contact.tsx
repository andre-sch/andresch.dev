import Link from "next/link";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Precisa de um site profissional?</h1>
          <Link href="https://wa.me/5544999230461" target="_blank">
            Entrar em contato
          </Link>
        </div>
      </div>
    </section>
  );
}
