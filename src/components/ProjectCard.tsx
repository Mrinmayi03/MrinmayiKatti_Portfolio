// src/components/ProjectCard.tsx
type VideoLink = {
  src: string;               // URL or imported file
  label: string;             // e.g., “Original”, “Translated”
  embed?: boolean;           // true = render <iframe> (Google‑Drive preview)
};

type Props = {
  title: string;
  tagline: string;
  bullets: string[];
  tech: string[];
  images: string[];
  videos?: VideoLink[];
  github?: string;
};

export default function ProjectCard({
  title,
  tagline,
  bullets,
  tech,
  images,
  videos,
  github,
}: Props) {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* ── screenshots ─────────────────────────────────────────── */}
      <div className="grid grid-cols-2 gap-1">
        {images.map((src) => (
          <img
            key={src}
            src={src}
            alt={`${title} screenshot`}
            className="w-full h-52 md:h-64 object-cover rounded"
          />
        ))}
      </div>

      {/* ── text/content ───────────────────────────────────────── */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-lg text-gray-300 mt-1">{tagline}</p>

        <ul className="list-disc ml-6 mt-4 text-base text-gray-200 space-y-2">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        {/* tech stack chips */}
        <div className="flex flex-wrap gap-1 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[11px] bg-indigo-600/20 text-indigo-200 px-2 py-px rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* optional videos */}
        {videos && (
          <div className="mt-6 space-y-6">
            {videos.map((v) => (
              <div key={v.src}>
                <p className="text-xs font-semibold text-gray-300 mb-1">
                  {v.label}
                </p>
                {v.embed ? (
                  <iframe
                    src={v.src}
                    className="w-full aspect-video rounded"
                    allow="autoplay"
                  />
                ) : (
                  <video
                    src={v.src}
                    controls
                    className="w-full rounded"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* links */}
        <div className="mt-6 space-x-4 text-sm">
          {github && (
            <a
              href={github}
              target="_blank"
              className="text-blue-400 underline"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}

          {/* download links for local MP4s */}
          {videos
            ?.filter((v) => !v.embed)
            .map((v) => (
              <a
                key={v.src}
                href={v.src}
                className="text-blue-400 underline"
                download
              >
                Download&nbsp;{v.label.toLowerCase()}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
