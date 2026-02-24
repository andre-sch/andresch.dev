import { DarkVeilBackground } from "./components/background/DarkVeilBackground";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <Contact />
      </main>
      <Footer />
      <DarkVeilBackground />
    </div>
  );
}
