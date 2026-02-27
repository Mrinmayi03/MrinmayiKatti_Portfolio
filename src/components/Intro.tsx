// src/components/Intro.tsx
import portrait from '../assets/portrait.jpg';

export default function Intro() {
  return (
    <section id="intro" className="pt-12 pb-20">
      <div className="rounded-3xl bg-white/70 backdrop-blur border border-slate-200 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] items-center">
          <img
            src={portrait}
            alt="Mrinmayi portrait"
            className="w-full max-w-[220px] aspect-square object-cover rounded-2xl shadow-md border border-slate-200"
          />

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Hi, I’m Mrinmayi Katti <span aria-hidden>👋</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl">
              Data Science graduate (NJIT, GPA 3.8) passionate about AI products, full-stack apps,
              and data-driven solutions.
            </p>

            <p className="mt-4 text-slate-700">
              <span className="font-semibold text-slate-900">Key Coursework:</span>{' '}
              Machine Learning • Deep Learning • Data Mining • Algorithms • Cloud Computing • Statistical Methods
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-4 py-2 text-slate-900 hover:bg-white transition"
              >
                View Projects <span aria-hidden>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-900 px-4 py-2 text-white hover:bg-slate-950 transition"
              >
                Contact <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}