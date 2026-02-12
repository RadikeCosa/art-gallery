import { artworks } from "@/data/artworks";
import ArtCard from "./ArtCard";

export default function Gallery() {
  return (
    <main className="grid grid-cols-2 gap-4 p-4 mb-20">
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
