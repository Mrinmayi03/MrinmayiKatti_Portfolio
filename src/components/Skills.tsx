// src/components/Skills.tsx
export default function Skills() {
  const skillGroups = [
    { title: 'Languages', skills: ['Python', 'TypeScript/JavaScript', 'SQL', 'R', 'SAS'] },
    { title: 'Backend & APIs', skills: ['FastAPI', 'Django REST', 'Node.js', 'REST APIs', 'Auth/JWT'] },
    { title: 'Data & ML', skills: ['pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'Feature Engineering'] },
    { title: 'Data Platforms', skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'BigQuery', 'Tableau'] },
    { title: 'Cloud & DevOps', skills: ['AWS (S3, RDS, EC2)', 'Docker', 'Kubernetes', 'CI/CD', 'Git'] },
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-10">
        Tech Skills
      </h2>

      <div className="grid gap-8">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="rounded-3xl bg-white/70 backdrop-blur border border-slate-200 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.35)] p-8"
          >
            <h3 className="text-xl font-semibold text-slate-900">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1 rounded-full border border-slate-300 bg-white/60 text-slate-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}