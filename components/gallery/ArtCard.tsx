import Link from "next/link";

interface ArtCardProps {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  aspectRatio?: string;
}

export default function ArtCard({
  id,
  title,
  imageUrl,
  imageAlt,
  aspectRatio,
}: ArtCardProps) {
  const getAspectRatioClass = (ratio?: string): string => {
    if (!ratio) return "masonry-item-1-1";
    return `masonry-item-${ratio.replace("/", "-")}`;
  };

  return (
    <Link
      href={`/${id}`}
      className={`masonry-item ${getAspectRatioClass(aspectRatio)} relative bg-(--color-background) rounded-xl overflow-hidden shadow-lg shadow-(--color-primary)/5`}
      aria-label={imageAlt}
      style={{
        aspectRatio: aspectRatio || "1/1",
      }}
    >
      <div
        className="w-full h-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      />
      <div className="p-3 bg-linear-to-t from-[rgba(0,0,0,0.8)] to-transparent absolute bottom-0 left-0 right-0">
        <p className="text-(--color-background-light) text-sm font-bold leading-tight line-clamp-2">
          {title}
        </p>
      </div>
    </Link>
  );
}
