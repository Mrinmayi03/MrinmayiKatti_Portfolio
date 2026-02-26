// src/components/Intro.tsx
import portrait from '../assets/portrait.jpg';

export default function Intro() {
  return (
    <section id="intro" className="pt-16 pb-24 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-10 shadow-lg shadow-black/20 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
            <img
              src={portrait}
              alt="Mrinmayi portrait"
              className="h-56 w-56 md:h-60 md:w-60 object-cover rounded-2xl border border-white/10 shadow-xl"
            />

            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Hi, I’m Mrinmayi Katti <span aria-hidden>👋</span>
              </h1>

              <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-300">
                Data Science graduate (NJIT, GPA 3.8) passionate about AI products,
                full-stack apps, and data-driven solutions.
              </p>

              <p className="mt-4 text-slate-400">
                <span className="font-semibold text-slate-300">Key Coursework:</span>{' '}
                Machine Learning • Deep Learning • Data Mining • Algorithms • Cloud Computing • Statistical Methods
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-lg border border-white/10 bg-slate-900/40 px-4 py-2 text-slate-200 hover:border-white/20 hover:bg-slate-900/60"
                >
                  View Projects →
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-slate-200 hover:border-white/20 hover:bg-white/15"
                >
                  Contact →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}