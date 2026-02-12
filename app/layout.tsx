import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Galería de Arte | Camola",
  description:
    "Galería de arte online de Camola, donde exhibe su colección de arte digital y proximamente su arte en formato fisico digitalizado en NFT.",
  icons: {
    other: [
      {
        rel: "stylesheet",
        url: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`inline ${plusJakarta.variable}`}>
      <body className="antialiased min-h-screen w-full flex flex-col bg-(--color-background-light) text-(--color-foreground) font-(--font-body)">
        {children}
      </body>
    </html>
  );
}
