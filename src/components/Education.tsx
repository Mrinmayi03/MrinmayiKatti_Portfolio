// src/components/Education.tsx
export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
          Education
        </h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg shadow-black/20 backdrop-blur">
          <h3 className="text-2xl font-semibold text-slate-100">
            New Jersey Institute of Technology
          </h3>

          <p className="mt-2 text-lg text-slate-300">
            B.S. in Data Science — May 2025 • GPA 3.8 / 4.0
          </p>

          <p className="mt-2 text-slate-400">
            Dean’s List • Merit Scholarship
          </p>
        </div>
      </div>
    </section>
  );
}