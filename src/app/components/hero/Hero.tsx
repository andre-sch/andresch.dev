import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>André Schlichting</h1>
          <h2>Engenheiro de Software</h2>
          <p>Crio soluções digitais personalizadas para resolver os problemas da sua empresa.</p>
        </div>
      </div>
    </section>
  );
}