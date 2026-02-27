// src/components/Education.tsx
export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-10">
        Education
      </h2>

      <div className="rounded-3xl bg-white/70 backdrop-blur border border-slate-200 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] p-10">
        <h3 className="text-2xl font-semibold text-slate-900">
          New Jersey Institute of Technology
        </h3>

        <p className="mt-3 text-lg text-slate-700">
          B.S. in Data Science — May 2025 • GPA 3.8 / 4.0
        </p>

        <p className="mt-4 text-slate-600">
          Dean’s List • Merit Scholarship
        </p>
      </div>
    </section>
  );
}