// src/app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"; // Importe DM_Sans
import "./globals.css";

// Configure DM Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans", // Defina uma variável CSS para a fonte
  weight: ["400", "500", "700"], // Especifique os pesos que você usará
});

export const metadata: Metadata = {
  title: "InstaReveal - Análise de Instagram", // Título ajustado para a landing page
  description:
    "Descubra informações ocultas de perfis do Instagram em minutos.", // Descrição ajustada
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body // Aplique a variável da fonte DM Sans ao body
        className={`${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
