export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-(--color-background) border-t border-(--color-background-light) px-6 pb-6 pt-3 flex justify-between items-center backdrop-blur-lg">
      <a
        className="active flex flex-col items-center gap-1 text-(--color-primary)"
        href="#"
      >
        <span className="material-symbols-outlined">home</span>
        <p className="text-[10px] font-bold uppercase tracking-wider">Inicio</p>
      </a>
      <a
        className="flex flex-col items-center gap-1 text-foreground/40 dark:text-foreground/50"
        href="#"
      >
        <span className="material-symbols-outlined">gallery_thumbnail</span>
        <p className="text-[10px] font-bold uppercase tracking-wider">Series</p>
      </a>
      <a
        className="flex flex-col items-center gap-1 text-foreground/40 dark:text-foreground/50"
        href="#"
      >
        <span className="material-symbols-outlined">face_6</span>
        <p className="text-[10px] font-bold uppercase tracking-wider">
          Sobre Mí
        </p>
      </a>
    </footer>
  );
}
