import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-[auto_1fr_auto] items-center bg-background/80 backdrop-blur-md p-4 pb-2 px-12 gap-x-8">
      <div className="flex size-12 shrink-0 items-center">
        <Link href="/" className="group">
          <div
            className="bg-linear-to-tr from-(--color-primary) to-(--color-secondary) aspect-square rounded-full size-10 flex items-center justify-center text-(--color-white) font-bold transition-all duration-200 group-hover:scale-110 group-hover:from-(--color-secondary) group-hover:to-(--color-primary) group-hover:shadow-lg"
            data-alt="colorful circular logo with letter C"
          >
            C
          </div>
        </Link>
      </div>
      <h1 className="text-(--color-foreground) text-3xl leading-tight tracking-[-0.015em] font-(--font-body) text-center w-full">
        Camola&apos;s Art Gallery
      </h1>
      {/* Links derecha */}
      <nav className="flex justify-end items-center gap-4">
        <Link
          href="#about"
          className="text-(--color-foreground) text-2xl font-medium transition-all duration-200 hover:scale-110 hover:text-(--color-secondary)"
        >
          About Me
        </Link>
      </nav>
    </header>
  );
}
