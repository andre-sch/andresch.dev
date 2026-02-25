import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ReactNode } from "react";

import "./global.css";

export const metadata: Metadata = {
  title: "André Schlichting",
  description: "Engenheiro e Desenvolvedor de Software",
};

const inter = Inter({
  subsets: ["latin"]
});

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="pt" className={inter.className}>
      <body>
        {props.children}
      </body>
    </html>
  );
}
