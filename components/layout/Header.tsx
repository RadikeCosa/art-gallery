"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "#series", label: "Series" },
  { href: "#about", label: "Sobre Mi" },
  { href: "#contact", label: "Contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-background)/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-(--color-primary) text-(--color-white) text-sm font-extrabold tracking-wide transition-transform duration-200 group-hover:scale-110"
            aria-hidden="true"
          >
            C
          </div>
          <span className="hidden text-lg font-bold tracking-tight text-(--color-foreground) sm:inline">
            Camola
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-(--color-neutral-600) transition-colors duration-200 hover:bg-(--color-neutral-100) hover:text-(--color-primary)"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex size-10 items-center justify-center rounded-lg text-(--color-foreground) transition-colors hover:bg-(--color-neutral-100) md:hidden"
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <nav
          className="border-t border-(--color-border) bg-(--color-background) px-4 pb-6 pt-2 md:hidden"
          aria-label="Navegacion movil"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold text-(--color-neutral-700) transition-colors duration-200 hover:bg-(--color-neutral-100) hover:text-(--color-primary)"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
