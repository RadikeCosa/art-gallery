import Link from "next/link";
import { artworks } from "@/data/artworks";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-display text-[#141118] dark:text-white bg-background-light dark:bg-background-dark">
      {/* TopAppBar */}
      <div className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between">
        <div className="flex size-12 shrink-0 items-center">
          <div
            className="bg-linear-to-tr from-primary to-pink-400 aspect-square rounded-full size-10 flex items-center justify-center text-white font-bold"
            data-alt="colorful circular logo with letter C"
          >
            C
          </div>
        </div>
        <h2 className="text-[#141118] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] flex-1 ml-2">
          Camila&apos;s Art
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-primary/10 text-primary">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>

      {/* SectionHeader */}
      <div className="flex items-center justify-between px-4 pt-4">
        <h2 className="text-[#141118] dark:text-white text-2xl font-bold leading-tight tracking-tight">
          Galería de Camila
        </h2>
        <span className="text-primary text-sm font-bold">Ver todo</span>
      </div>

      {/* ImageGrid */}
      <div className="grid grid-cols-2 gap-4 p-4 mb-20">
        {artworks.map((art) => (
          <Link
            key={art.id}
            href={`/${art.id}`}
            className="relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg shadow-primary/5 flex flex-col"
            aria-label={art.imageAlt}
          >
            <div
              className="w-full aspect-3/4 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${art.imageUrl}')`,
              }}
            />
            <div className="p-3 bg-linear-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0">
              <p className="text-white text-sm font-bold leading-tight line-clamp-2">
                {art.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* BottomNavBar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-background-dark/95 border-t border-gray-100 dark:border-white/5 px-6 pb-6 pt-3 flex justify-between items-center backdrop-blur-lg">
        <a
          className="active flex flex-col items-center gap-1 text-primary"
          href="#"
        >
          <span className="material-symbols-outlined">home</span>
          <p className="text-[10px] font-bold uppercase tracking-wider">
            Inicio
          </p>
        </a>
        <a
          className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500"
          href="#"
        >
          <span className="material-symbols-outlined">gallery_thumbnail</span>
          <p className="text-[10px] font-bold uppercase tracking-wider">
            Series
          </p>
        </a>
        <a
          className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500"
          href="#"
        >
          <span className="material-symbols-outlined">face_6</span>
          <p className="text-[10px] font-bold uppercase tracking-wider">
            Sobre Mí
          </p>
        </a>
      </div>
    </div>
  );
}
