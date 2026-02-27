// src/components/Certifications.tsx
export default function Certifications() {
  const certs = ['CompTIA Data+', 'Dean’s List (NJIT)', 'Merit-Based Scholarship'];

  return (
    <section id="certifications" className="py-20">
      <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-10">
        Certifications & Awards
      </h2>

      <div className="rounded-3xl bg-white/70 backdrop-blur border border-slate-200 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] p-8 md:p-10">
        <ul className="list-disc ml-6 text-slate-700 space-y-3">
          {certs.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}