import Link from "next/link";
import { artworks } from "@/data/artworks";

export default function Gallery() {
  return (
    <main className="grid grid-cols-2 gap-4 p-4 mb-20">
      {artworks.map((art) => (
        <Link
          key={art.id}
          href={`/${art.id}`}
          className="relative bg-(--color-background) rounded-xl overflow-hidden shadow-lg shadow-(--color-primary)/5 flex flex-col"
          aria-label={art.imageAlt}
        >
          <div
            className="w-full aspect-3/4 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${art.imageUrl}')`,
            }}
          />
          <div className="p-3 bg-linear-to-t from-[rgba(0,0,0,0.8)] to-transparent absolute bottom-0 left-0 right-0">
            <p className="text-(--color-background) text-sm font-bold leading-tight line-clamp-2">
              {art.title}
            </p>
          </div>
        </Link>
      ))}
    </main>
  );
}
