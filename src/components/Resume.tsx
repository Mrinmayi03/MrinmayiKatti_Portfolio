import SectionShell from "./SectionShell";

const RESUME_URL = "/Users/katti/MrinmayiKatti_Portfolio/MrinmayiKatti_Resume_DE.pdf";

export default function Resume() {
  return (
    <SectionShell
      id="resume"
      title="Resume"
      subtitle="Download a PDF copy or preview it directly here."
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-500/15 px-4 py-2 text-sm font-semibold text-indigo-200 border border-indigo-500/25 hover:bg-indigo-500/20 transition"
          >
            View in new tab →
          </a>

          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 border border-white/10 hover:bg-white/15 transition"
          >
            Download PDF
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <iframe
            title="Resume PDF"
            src={`${RESUME_URL}#view=FitH`}
            className="w-full h-[80vh]"
          />
        </div>

        <p className="text-xs text-slate-400">
          Tip: keep the resume filename stable so recruiters can always access it.
        </p>
      </div>
    </SectionShell>
  );
}