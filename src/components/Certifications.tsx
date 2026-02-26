// src/components/Certifications.tsx
export default function Certifications() {
  const certs = ['CompTIA Data+', 'Dean’s List (NJIT)', 'Merit-Based Scholarship'];

  return (
    <section id="certifications" className="py-24 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
          Certifications & Awards
        </h2>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-lg shadow-black/20 backdrop-blur">
          <ul className="space-y-3 text-slate-300">
            {certs.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}