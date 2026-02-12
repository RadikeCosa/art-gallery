import Link from "next/link";

const footerSections = [
  {
    title: "Galeria",
    links: [
      { label: "Todas las Obras", href: "/" },
      { label: "Series", href: "#series" },
      { label: "Nuevas Obras", href: "#new" },
    ],
  },
  {
    title: "Sobre",
    links: [
      { label: "Sobre Camola", href: "#about" },
      { label: "Proceso Creativo", href: "#process" },
      { label: "Contacto", href: "#contact" },
    ],
  },
  {
    title: "Redes",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Twitter / X", href: "https://x.com" },
      { label: "Behance", href: "https://behance.net" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-(--color-border) bg-(--color-neutral-900) text-(--color-neutral-300)">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        {/* Top section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-(--color-primary) text-sm font-extrabold text-(--color-white)">
                C
              </div>
              <span className="text-lg font-bold text-(--color-white)">
                Camola
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-(--color-neutral-400)">
              Galeria de arte digital donde la creatividad y la imaginacion se
              encuentran. Cada obra cuenta una historia unica.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-(--color-neutral-500)">
                  {section.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-(--color-neutral-400) transition-colors duration-200 hover:text-(--color-white)"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-(--color-neutral-700)" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-(--color-neutral-500)">
            {new Date().getFullYear()} Camola. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#privacy"
              className="text-xs text-(--color-neutral-500) transition-colors hover:text-(--color-neutral-300)"
            >
              Privacidad
            </Link>
            <Link
              href="#terms"
              className="text-xs text-(--color-neutral-500) transition-colors hover:text-(--color-neutral-300)"
            >
              Terminos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
