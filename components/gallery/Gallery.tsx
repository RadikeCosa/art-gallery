"use client";

import { useState, useRef } from "react";
import { artworks } from "@/data/artworks";
import ArtCard from "./ArtCard";

type ViewMode = "grid" | "carousel";

export default function Gallery() {
  const [view, setView] = useState<ViewMode>("grid");
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const amount = trackRef.current.clientWidth * 0.6;
    trackRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 md:px-8">
      {/* Section header + view toggle */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-(--color-foreground) md:text-3xl text-balance">
            Coleccion de Arte
          </h2>
          <p className="mt-1 text-sm text-(--color-neutral-500) leading-relaxed">
            Explora las obras digitales de Camola
          </p>
        </div>

        {/* Toggle buttons */}
        <div
          className="flex items-center gap-1 self-start rounded-xl bg-(--color-neutral-100) p-1"
          role="tablist"
          aria-label="Modo de vista"
        >
          <button
            role="tab"
            aria-selected={view === "grid"}
            onClick={() => setView("grid")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              view === "grid"
                ? "bg-(--color-card) text-(--color-primary) shadow-sm"
                : "text-(--color-neutral-500) hover:text-(--color-foreground)"
            }`}
          >
            <span className="material-symbols-outlined text-lg">grid_view</span>
            <span className="hidden sm:inline">Grilla</span>
          </button>
          <button
            role="tab"
            aria-selected={view === "carousel"}
            onClick={() => setView("carousel")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              view === "carousel"
                ? "bg-(--color-card) text-(--color-primary) shadow-sm"
                : "text-(--color-neutral-500) hover:text-(--color-foreground)"
            }`}
          >
            <span className="material-symbols-outlined text-lg">view_carousel</span>
            <span className="hidden sm:inline">Carrusel</span>
          </button>
        </div>
      </div>

      {/* Grid view (masonry) */}
      {view === "grid" && (
        <div className="masonry-grid view-transition" role="tabpanel" aria-label="Vista de grilla">
          {artworks.map((art, i) => (
            <ArtCard
              key={art.id}
              id={art.id}
              title={art.title}
              imageUrl={art.imageUrl}
              imageAlt={art.imageAlt}
              aspectRatio={art.aspectRatio}
              artist={art.artist}
              index={i}
            />
          ))}
        </div>
      )}

      {/* Carousel view */}
      {view === "carousel" && (
        <div className="view-transition relative md:px-8" role="tabpanel" aria-label="Vista de carrusel">
          {/* Navigation buttons - vertically centered on the images */}
          <button
            onClick={() => scrollBy("left")}
            className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-(--color-border) bg-(--color-card) text-(--color-neutral-600) shadow-lg transition-all duration-200 hover:border-(--color-primary) hover:text-(--color-primary) hover:shadow-xl md:flex size-11"
            aria-label="Anterior"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button
            onClick={() => scrollBy("right")}
            className="absolute right-0 top-1/2 z-10 hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-(--color-border) bg-(--color-card) text-(--color-neutral-600) shadow-lg transition-all duration-200 hover:border-(--color-primary) hover:text-(--color-primary) hover:shadow-xl md:flex size-11"
            aria-label="Siguiente"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>

          <div ref={trackRef} className="carousel-track">
            {artworks.map((art, i) => (
              <div key={art.id} className="carousel-slide">
                <ArtCard
                  id={art.id}
                  title={art.title}
                  imageUrl={art.imageUrl}
                  imageAlt={art.imageAlt}
                  aspectRatio={art.aspectRatio}
                  artist={art.artist}
                  index={i}
                  variant="carousel"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
