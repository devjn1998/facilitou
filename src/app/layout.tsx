import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import LayoutContent from "./components/LayoutContent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facilita",
  description: "O melhor lugar para suas compras online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
