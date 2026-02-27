// src/components/Resume.tsx
const RESUME_PATH = '/MrinmayiKatti_Resume_DE.pdf';

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-10">
        Resume
      </h2>

      <div className="rounded-3xl bg-white/70 backdrop-blur border border-slate-200 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] overflow-hidden">
        <div className="p-6 md:p-8 flex flex-wrap items-center gap-3 justify-between">
          <p className="text-slate-700">
            View or download my resume (PDF).
          </p>

          <div className="flex gap-3">
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-4 py-2 text-slate-900 hover:bg-white transition"
            >
              View in new tab <span aria-hidden>↗</span>
            </a>

            <a
              href={RESUME_PATH}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-900 px-4 py-2 text-white hover:bg-slate-950 transition"
            >
              Download PDF <span aria-hidden>↓</span>
            </a>
          </div>
        </div>

        {/* PDF preview */}
        <div className="bg-white">
          <iframe
            title="Resume PDF"
            src={RESUME_PATH}
            className="w-full h-[900px]"
          />
        </div>
      </div>
    </section>
  );
}