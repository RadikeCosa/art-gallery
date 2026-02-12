import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const _plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#8c2bee",
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Galeria de Arte | Camola",
  description:
    "Galeria de arte online de Camola, donde exhibe su coleccion de arte digital y proximamente su arte en formato fisico digitalizado en NFT.",
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
    <html lang="es">
      <body className="antialiased flex min-h-screen w-full flex-col bg-(--color-background) text-(--color-foreground) font-sans">
        {children}
      </body>
    </html>
  );
}
