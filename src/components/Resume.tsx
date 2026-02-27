// src/components/Resume.tsx
const resumePdf = '/MrinmayiKatti_Resume_DE.pdf';

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="rounded-3xl border border-slate-900/10 bg-white/70 shadow-[0_18px_60px_-40px_rgba(15,23,42,0.35)] backdrop-blur">
        <div className="p-8 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Resume
              </h2>
              <p className="mt-2 text-slate-600">
                View it in-browser or download the PDF.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
              >
                View in new tab →
              </a>
              <a
                href={resumePdf}
                download
                className="inline-flex items-center justify-center rounded-xl border border-slate-900/15 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* Embedded preview */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-900/10 bg-white">
            <iframe
              title="Resume PDF"
              src={resumePdf}
              className="h-[78vh] w-full"
            />
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Tip: If the PDF preview doesn’t load on a specific browser/device,
            use “View in new tab” or “Download PDF”.
          </p>
        </div>
      </div>
    </section>
  );
}