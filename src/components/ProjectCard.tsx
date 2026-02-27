// src/components/ProjectCard.tsx
type VideoLink = {
  src: string;
  label: string;
  embed?: boolean;
};

type Props = {
  title: string;
  tagline: string;
  bullets: string[];
  tech: string[];
  images: string[];
  videos?: VideoLink[];
  github?: string;
  LiveDemo?: string;
  accent?: string; // tailwind gradient like "from-amber-400/70 to-orange-400/70"
};

export default function ProjectCard({
  title,
  tagline,
  bullets,
  tech,
  images,
  videos,
  github,
  LiveDemo,
  accent = 'from-slate-900/10 to-slate-900/0',
}: Props) {
  return (
    <article className="rounded-3xl bg-white/70 backdrop-blur border border-slate-200 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] overflow-hidden">
      {/* accent strip */}
      <div className={`h-1.5 bg-gradient-to-r ${accent}`} />

      {/* header */}
      <div className="p-6 md:p-7">
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        <p className="mt-2 text-slate-700">{tagline}</p>
      </div>

      {/* images */}
      {images?.length > 0 && (
        <div className="px-6 md:px-7 pb-6">
          <div className="grid grid-cols-2 gap-2">
            {images.slice(0, 4).map((src) => (
              <img
                key={src}
                src={src}
                alt={`${title} screenshot`}
                className="w-full aspect-video object-cover rounded-2xl border border-slate-200"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}

      {/* content */}
      <div className="px-6 md:px-7 pb-7">
        <ul className="list-disc ml-6 text-slate-700 space-y-2">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full border border-slate-300 bg-white/60 text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        {videos && (
          <div className="mt-7 space-y-6">
            {videos.map((v) => (
              <div key={v.src}>
                <p className="text-xs font-semibold text-slate-700 mb-2">
                  {v.label}
                </p>
                {v.embed ? (
                  <iframe
                    src={v.src}
                    className="w-full aspect-video rounded-2xl border border-slate-200"
                    allow="autoplay"
                  />
                ) : (
                  <video
                    src={v.src}
                    controls
                    className="w-full rounded-2xl border border-slate-200"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-4 py-2 text-slate-900 hover:bg-white transition"
            >
              GitHub <span aria-hidden>↗</span>
            </a>
          )}

          {LiveDemo && (
            <a
              href={LiveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-900 px-4 py-2 text-white hover:bg-slate-950 transition"
            >
              Live Demo <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}