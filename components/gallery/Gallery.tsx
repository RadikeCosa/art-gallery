import { artworks } from "@/data/artworks";
import ArtCard from "./ArtCard";

export default function Gallery() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 min-h-screen">
      {artworks.map((art) => (
        <ArtCard
          key={art.id}
          id={art.id}
          title={art.title}
          imageUrl={art.imageUrl}
          imageAlt={art.imageAlt}
        />
      ))}
    </main>
  );
}
