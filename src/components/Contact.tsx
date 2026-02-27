// src/components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-10">
        Contact
      </h2>

      <div className="rounded-3xl bg-white/70 backdrop-blur border border-slate-200 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] p-8 md:p-10">
        <p className="text-slate-700 text-lg mb-6">
          I’m open to new-grad SWE / Data Science opportunities.
        </p>

        <div className="space-y-3 text-slate-700">
          <p>
            <span className="font-semibold text-slate-900">Email:</span>{' '}
            <a className="underline hover:text-slate-900" href="mailto:mpkatti03@gmail.com">
              mpkatti03@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-slate-900">LinkedIn:</span>{' '}
            <a
              className="underline hover:text-slate-900"
              href="https://linkedin.com/in/mrinmayi-p-katti-0a6333248"
              target="_blank"
              rel="noreferrer"
            >
              /in/mrinmayi-p-katti-0a6333248
            </a>
          </p>

          <p>
            <span className="font-semibold text-slate-900">GitHub:</span>{' '}
            <a
              className="underline hover:text-slate-900"
              href="https://github.com/Mrinmayi03"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Mrinmayi03
            </a>
          </p>

          <p>
            <span className="font-semibold text-slate-900">Phone:</span>{' '}
            <span className="text-slate-700">+1 862-405-0732</span>
          </p>
        </div>
      </div>
    </section>
  );
}