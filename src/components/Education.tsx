// src/components/Education.tsx
export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-gray-900 text-gray-100 border-t-2 border-white-700"
    >
      {/* ── Heading ─────────────────────────────────────────── */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
        Education
      </h2>

      {/* ── School block ───────────────────────────────────── */}
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-gray-50">
          New Jersey Institute of Technology
        </h3>

        <p className="text-xl text-gray-300">
          B.S. in Data Science — May 2025 • GPA 3.8 / 4.0
        </p>

        <p className="text-lg text-gray-400">
          Dean’s List • Merit Scholarship
        </p>
      </div>
    </section>
  );
}
