import { artworks } from "@/data/artworks";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ArtworkDetail({
  params,
}: {
  params: { id: string };
}) {
  const resolvedParams = await params;
  const art = artworks.find((a) => a.id === resolvedParams.id);
  if (!art) return notFound();

  return (
    <div className="flex min-h-screen flex-col bg-(--color-background)">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-(--color-border) bg-(--color-background)/85 backdrop-blur-lg">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 md:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-(--color-neutral-600) transition-colors duration-200 hover:bg-(--color-neutral-100) hover:text-(--color-primary)"
          >
            <span className="material-symbols-outlined text-xl transition-transform duration-200 group-hover:-translate-x-0.5">
              arrow_back_ios_new
            </span>
            <span className="text-sm font-semibold hidden sm:inline">Galeria</span>
          </Link>
          <p className="text-sm font-semibold text-(--color-neutral-500)">
            {art.artist}
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 md:px-8 md:py-12">
        <article className="overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) shadow-sm">
          {/* Artwork image */}
          <div className="group/img relative overflow-hidden">
            <div
              className="w-full bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover/img:scale-[1.03]"
              style={{
                backgroundImage: `url('${art.imageUrl}')`,
                aspectRatio: art.aspectRatio || "4/3",
              }}
              role="img"
              aria-label={art.imageAlt}
            />
            {/* Subtle gradient overlay on hover */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--color-neutral-900)/20 to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100" />
          </div>

          {/* Content section */}
          <div className="flex flex-col gap-6 p-6 md:p-10">
            {/* Title + meta */}
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-extrabold tracking-tight text-(--color-foreground) md:text-4xl text-balance leading-tight">
                {art.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-(--color-neutral-500)">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base text-(--color-primary)">
                    calendar_today
                  </span>
                  {art.createdDate}
                </span>
                {art.dimensions && (
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-base text-(--color-primary)">
                      aspect_ratio
                    </span>
                    {art.dimensions}px
                  </span>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-(--color-border)" />

            {/* Story */}
            <div>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-(--color-primary)">
                La historia detras
              </h3>
              <p className="text-base leading-relaxed text-(--color-neutral-600) md:text-lg">
                {art.story}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <button className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl bg-(--color-secondary)/10 px-4 py-3.5 text-sm font-bold text-(--color-secondary) transition-all duration-200 hover:bg-(--color-secondary)/20 hover:shadow-md active:scale-[0.97]">
                <span className="material-symbols-outlined fill-icon text-lg transition-transform duration-200 group-hover/btn:scale-110">
                  favorite
                </span>
                Me encanta
              </button>
              <button className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl bg-(--color-primary)/10 px-4 py-3.5 text-sm font-bold text-(--color-primary) transition-all duration-200 hover:bg-(--color-primary)/20 hover:shadow-md active:scale-[0.97]">
                <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover/btn:scale-110">
                  share
                </span>
                Compartir
              </button>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
