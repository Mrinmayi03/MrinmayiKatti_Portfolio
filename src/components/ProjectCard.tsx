import { useMemo, useState } from "react";

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
  accent?: string; // gradient string e.g. "from-indigo-400/70 to-cyan-400/70"
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
  accent = "from-slate-400/50 to-slate-200/30",
}: Props) {
  const [showAll, setShowAll] = useState(false);

  const { primaryImages, extraImages } = useMemo(() => {
    const primary = images.slice(0, 2);
    const extra = images.slice(2);
    return { primaryImages: primary, extraImages: extra };
  }, [images]);

  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden shadow-lg">
      {/* Accent top bar */}
      <div className={`h-1.5 bg-gradient-to-r ${accent}`} />

      {/* Title ABOVE images */}
      <div className="p-6 pb-4">
        <h3 className="text-2xl font-extrabold text-slate-900">{title}</h3>
        <p className="mt-1 text-slate-300">{tagline}</p>
      </div>

      {/* Images */}
      <div className="px-6">
        <div className="grid grid-cols-2 gap-2">
          {primaryImages.map((src) => (
            <img
              key={src}
              src={src}
              alt={`${title} screenshot`}
              className="w-full aspect-video object-cover rounded-xl border border-white/10"
              loading="lazy"
            />
          ))}
        </div>

        {extraImages.length > 0 && (
          <div className="mt-3">
            {showAll && (
              <div className="grid grid-cols-2 gap-2 mt-3">
                {extraImages.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${title} screenshot`}
                    className="w-full aspect-video object-cover rounded-xl border border-white/10"
                    loading="lazy"
                  />
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="mt-3 text-sm font-semibold text-indigo-200 hover:text-indigo-100"
            >
              {showAll ? "Show fewer screenshots" : `View ${extraImages.length} more screenshot(s)`}
            </button>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 pt-5">
        <ul className="list-disc ml-5 text-slate-700 space-y-2">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2 mt-5">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-full text-indigo-200 border border-indigo-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Videos */}
        {videos?.length ? (
          <div className="mt-6 space-y-6">
            {videos.map((v) => (
              <div key={v.src}>
                <p className="text-xs font-semibold text-slate-600 mb-2">
                  {v.label}
                </p>
                {v.embed ? (
                  <iframe
                    src={v.src}
                    className="w-full aspect-video rounded-2xl border border-white/10"
                    allow="autoplay"
                  />
                ) : (
                  <video
                    src={v.src}
                    controls
                    className="w-full rounded-2xl border border-white/10"
                  />
                )}
              </div>
            ))}
          </div>
        ) : null}

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-indigo-200 hover:text-indigo-100"
            >
              GitHub →
            </a>
          )}
          {LiveDemo && (
            <a
              href={LiveDemo}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-indigo-200 hover:text-indigo-100"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}