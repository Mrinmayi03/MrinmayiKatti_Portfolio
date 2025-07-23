export default function Skills() {
  const skills = [
    'Python','JavaScript/TypeScript','SQL','R','SAS','Docker','AWS',
    'FastAPI','React','Tailwind','TensorFlow','scikit‑learn','Whisper',
  ];
  return (
    <section id="skills" className="py-16 px-6">
      <h2 className="text-2xl font-bold mb-6">Tech Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(s => (
          <span key={s} className="text-sm bg-indigo-50 border border-indigo-200 px-3 py-1 rounded">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
