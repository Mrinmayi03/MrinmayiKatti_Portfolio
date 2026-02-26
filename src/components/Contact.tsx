// src/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
          Get in Touch
        </h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg shadow-black/20 backdrop-blur">
          <p className="text-slate-300">
            I’m open to new-grad SWE / Data Science opportunities.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 text-slate-200">
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
              <p className="text-sm text-slate-400">Email</p>
              <a
                href="mailto:mpkatti03@gmail.com"
                className="mt-1 inline-block font-medium hover:underline"
              >
                mpkatti03@gmail.com
              </a>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
              <p className="text-sm text-slate-400">LinkedIn</p>
              <a
                href="https://linkedin.com/in/mrinmayi-p-katti-0a6333248"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block font-medium hover:underline"
              >
                linkedin.com/in/mrinmayi-p-katti-0a6333248
              </a>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
              <p className="text-sm text-slate-400">GitHub</p>
              <a
                href="https://github.com/Mrinmayi03"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block font-medium hover:underline"
              >
                github.com/Mrinmayi03
              </a>
            </div>

            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
              <p className="text-sm text-slate-400">Phone</p>
              <p className="mt-1 font-medium">+1 862-405-0732</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}