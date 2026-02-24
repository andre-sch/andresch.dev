import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin }  from "react-icons/fa";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <span className={styles.logo}>
          andresch.dev
        </span>

        <ul className={styles.socials}>
          <li><Link href="https://github.com/andre-sch/" target="_blank" aria-label="Github"><FaGithub size={24} color="var(--text-muted)" /></Link></li>
          <li><Link href="https://www.linkedin.com/in/andre-sch/" target="_blank" aria-label="Linkedin"><FaLinkedin size={24} color="var(--text-muted)" /></Link></li>
          <li><Link href="https://www.instagram.com/andresch.dev/" target="_blank" aria-label="Instagram"><FaInstagram size={24} color="var(--text-muted)" /></Link></li>
          <li><Link href="https://www.facebook.com/andresch.dev/" target="_blank" aria-label="Facebook"><FaFacebook size={24} color="var(--text-muted)" /></Link></li>
        </ul>
      </div>
    </footer>
  );
}
