import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PAF Studio - Business Model & Workflow",
  description: "Présentation du modèle business et workflow de PAF Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
