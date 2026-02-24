import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Theme } from "@radix-ui/themes";

import "./global.css";
import "@radix-ui/themes/styles.css";

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
      <body className="dark">
        <Theme>
          {props.children}
        </Theme>
      </body>
    </html>
  );
}
