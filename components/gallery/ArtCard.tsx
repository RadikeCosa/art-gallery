import Link from "next/link";

interface ArtCardProps {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  aspectRatio?: string;
  artist?: string;
  index?: number;
  variant?: "grid" | "carousel";
}

export default function ArtCard({
  id,
  title,
  imageUrl,
  imageAlt,
  aspectRatio,
  artist,
  index = 0,
  variant = "grid",
}: ArtCardProps) {
  const isCarousel = variant === "carousel";

  return (
    <Link
      href={`/${id}`}
      className="gallery-card group"
      aria-label={imageAlt}
      style={{
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* Image */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          aspectRatio: isCarousel ? "3/4" : (aspectRatio || "1/1"),
        }}
        role="img"
        aria-label={imageAlt}
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.1)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Always-visible title bar */}
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[rgba(0,0,0,0.75)] to-transparent px-4 pb-4 pt-10">
        <p className="text-sm font-bold leading-tight text-(--color-white) line-clamp-2">
          {title}
        </p>
        {artist && (
          <p className="mt-1 text-xs font-medium text-(--color-white)/70">
            {artist}
          </p>
        )}
      </div>

      {/* Hover icon */}
      <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-(--color-white)/90 text-(--color-primary) opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-75">
        <span className="material-symbols-outlined text-lg">arrow_outward</span>
      </div>
    </Link>
  );
}
