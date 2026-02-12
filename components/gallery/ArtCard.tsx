import Link from "next/link";

interface ArtCardProps {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
}

export default function ArtCard({
  id,
  title,
  imageUrl,
  imageAlt,
}: ArtCardProps) {
  return (
    <Link
      href={`/${id}`}
      className="relative bg-(--color-background) rounded-xl overflow-hidden shadow-lg shadow-(--color-primary)/5 flex flex-col h-full"
      aria-label={imageAlt}
    >
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      />
      <div className="p-3 bg-linear-to-t from-[rgba(0,0,0,0.8)] to-transparent absolute bottom-0 left-0 right-0">
        <p className="text-(--color-background) text-sm font-bold leading-tight line-clamp-2">
          {title}
        </p>
      </div>
    </Link>
  );
}
