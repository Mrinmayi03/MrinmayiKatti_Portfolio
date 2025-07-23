// src/components/Skills.tsx
export default function Skills() {
  const skills = [
    'Python',
    'JavaScript/TypeScript',
    'SQL',
    'R',
    'SAS',
    'Docker',
    'AWS',
    'FastAPI',
    'React',
    'Tailwind',
    'TensorFlow',
    'scikit‑learn',
    'Whisper',
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-900 text-gray-100 border-t-2 border-white-700"
    >
      {/* ── Heading ─────────────────────────────────────────── */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
        Tech Skills
      </h2>

      {/* ── Skill pills ────────────────────────────────────── */}
      <div className="flex flex-wrap gap-4 max-w-5xl">
        {skills.map((s) => (
          <span
            key={s}
            className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 text-base md:text-lg font-medium shadow-sm whitespace-nowrap"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

