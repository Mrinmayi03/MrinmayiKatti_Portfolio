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
  accent?: string; // NEW: gradient string like "from-indigo-400/70 to-cyan-400/70"
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
  accent = 'from-indigo-400/60 to-sky-400/60',
}: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:border-white/20">
      {/* Accent strip */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${accent}`} />

      {/* Header (TITLE ABOVE IMAGES) */}
      <div className="p-5">
        <h3 className="text-xl md:text-2xl font-semibold text-slate-100">
          {title}
        </h3>
        <p className="mt-1 text-sm md:text-base text-slate-300">{tagline}</p>
      </div>

      {/* Screenshots */}
      <div className="grid grid-cols-2 gap-1 px-5 pb-5">
        {images.map((src) => (
          <div key={src} className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/40">
            <img
              src={src}
              alt={`${title} screenshot`}
              className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        <ul className="mt-2 space-y-2 text-sm md:text-[15px] text-slate-300">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Tech chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs text-slate-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Optional videos */}
        {videos && (
          <div className="mt-6 space-y-6">
            {videos.map((v) => (
              <div key={v.src} className="space-y-2">
                <p className="text-xs font-semibold text-slate-300">{v.label}</p>
                {v.embed ? (
                  <iframe
                    src={v.src}
                    className="w-full aspect-video rounded-xl border border-white/10"
                    allow="autoplay"
                  />
                ) : (
                  <video
                    src={v.src}
                    controls
                    className="w-full rounded-xl border border-white/10"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg border border-white/10 bg-slate-900/40 px-3 py-2 text-slate-200 hover:border-white/20 hover:bg-slate-900/60"
            >
              GitHub →
            </a>
          )}

          {LiveDemo && (
            <a
              href={LiveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg border border-white/10 bg-slate-900/40 px-3 py-2 text-slate-200 hover:border-white/20 hover:bg-slate-900/60"
            >
              Live Demo →
            </a>
          )}

          {videos
            ?.filter((v) => !v.embed)
            .map((v) => (
              <a
                key={v.src}
                href={v.src}
                download
                className="inline-flex items-center rounded-lg border border-white/10 bg-slate-900/40 px-3 py-2 text-slate-200 hover:border-white/20 hover:bg-slate-900/60"
              >
                Download {v.label.toLowerCase()} →
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}