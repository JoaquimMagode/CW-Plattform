import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV Builder Moçambique | Kernup Group",
  description: "Crie seu currículo profissional de forma simples e rápida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="antialiased bg-gray-50">
        {children}
      </body>
    </html>
  );
}
