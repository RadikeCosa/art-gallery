import { artworks } from "@/data/artworks";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ArtworkDetail({
  params,
}: {
  params: { id: string };
}) {
  const resolvedParams = await params;
  console.log("params:", resolvedParams);
  const art = artworks.find((a) => a.id === resolvedParams.id);
  console.log("art encontrado:", art);
  if (!art) return notFound();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden max-w-120 mx-auto">
      {/* TopAppBar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="text-[#141118] dark:text-white flex size-12 shrink-0 items-center cursor-pointer">
          <Link href="/">
            <span className="material-symbols-outlined text-2xl">
              arrow_back_ios_new
            </span>
          </Link>
        </div>
        <h2 className="text-[#141118] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center font-display">
          Obra de Camila
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-120 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#141118] dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined text-2xl">
              more_horiz
            </span>
          </button>
        </div>
      </div>

      {/* HeaderImage (Full width artwork) */}
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-100 shadow-sm"
            style={{
              backgroundImage: `url('${art.imageUrl}')`,
            }}
            role="img"
            aria-label={art.imageAlt}
          />
        </div>
      </div>

      {/* HeadlineText */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[#141118] dark:text-white tracking-tight text-[36px] font-extrabold leading-tight px-4 text-left pt-6 font-display">
          {art.title}
        </h1>
      </div>

      {/* MetaText */}
      <div className="flex items-center gap-2 px-4 pt-1">
        <span className="material-symbols-outlined text-primary text-sm">
          calendar_today
        </span>
        <p className="text-[#756189] dark:text-[#a390b8] text-sm font-semibold leading-normal font-display">
          Creado el {art.createdDate}
        </p>
      </div>

      {/* Interaction Buttons for Kids */}
      <div className="flex gap-4 px-4 py-6">
        <button className="flex-1 flex items-center justify-center gap-2 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 py-4 rounded-2xl font-bold text-lg transition-transform active:scale-95">
          <span className="material-symbols-outlined fill-icon">favorite</span>
          ¡Me encanta!
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 bg-primary/10 dark:bg-primary/20 text-primary py-4 rounded-2xl font-bold text-lg transition-transform active:scale-95">
          <span className="material-symbols-outlined">share</span>
          Compartir
        </button>
      </div>

      {/* BodyText (Story) */}
      <div className="px-4 pb-10">
        <div className="bg-white dark:bg-[#251a33] p-6 rounded-2xl border-2 border-primary/10">
          <h3 className="text-primary text-xs uppercase font-black tracking-widest mb-3">
            La historia detrás
          </h3>
          <p className="text-[#141118] dark:text-gray-200 text-lg font-normal leading-relaxed font-display">
            {art.story}
          </p>
        </div>
      </div>

      {/* Bottom Navigation Spacer */}
      <div className="h-10 bg-background-light dark:bg-background-dark" />
    </div>
  );
}
