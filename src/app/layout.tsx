// src/app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"; // APENAS DM_Sans aqui

import "./globals.css"; // Certifique-se de que esta linha está presente

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans", // Variável CSS para a fonte
  weight: ["400", "500", "700"], // Pesos comuns para garantir que os estilos funcionem
});

export const metadata: Metadata = {
  title: "InstaReveal - Análise de Instagram",
  description:
    "Descubra informações ocultas de perfis do Instagram em minutos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        // Aplique a variável da fonte DM Sans e a classe font-sans do Tailwind
        className={`${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
