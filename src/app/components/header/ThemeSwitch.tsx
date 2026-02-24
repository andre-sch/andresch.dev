"use client";

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import styles from "./ThemeSwitch.module.css";
import { Switch } from "@radix-ui/themes";


export function ThemeSwitch() {
  return (
    <div className={styles.container}>
      <Switch size="3" variant="classic" defaultChecked onClick={toggleTheme} />
      <MdOutlineDarkMode size={14} className={[styles.icon, styles.dark].join(" ")} />
    </div>
  );
}

function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.replace("dark", "light");
    return;
  }

  document.body.classList.replace("light", "dark");
}
