// src/components/Certifications.tsx
export default function Certifications() {
  const certs = [
    'CompTIA Data+',
    'Dean’s List (NJIT)',
    'Merit‑Based Scholarship',
  ];

  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-gray-900 text-gray-100 border-t-2 border-white-700"
    >
      {/* ── Heading ─────────────────────────────────────────── */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
        Certifications & Awards
      </h2>

      {/* ── Bullet list ─────────────────────────────────────── */}
      <ul className="list-disc ml-6 space-y-4">
        {certs.map((c) => (
          <li key={c} className="text-lg text-gray-300">
            {c}
          </li>
        ))}
      </ul>
    </section>
  );
}
