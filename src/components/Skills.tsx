// src/components/Skills.tsx
export default function Skills() {
  const skillGroups = [
    {
      title: 'Languages & Programming',
      skills: ['Python', 'JavaScript/TypeScript', 'SQL', 'R', 'SAS'],
      accent: 'from-indigo-400/70 to-cyan-400/70',
    },
    {
      title: 'Web & Software Development',
      skills: ['React', 'FastAPI', 'Node.js', 'RESTful APIs', 'Tailwind CSS'],
      accent: 'from-emerald-400/70 to-lime-400/70',
    },
    {
      title: 'Data Science & ML',
      skills: [
        'TensorFlow',
        'scikit-learn',
        'pandas',
        'NumPy',
        'Streamlit',
        'Seaborn',
        'Jupyter Notebooks',
        'Feature Engineering',
      ],
      accent: 'from-fuchsia-400/70 to-indigo-400/70',
    },
    {
      title: 'Cloud, DevOps & Deployment',
      skills: ['Docker', 'AWS (S3, RDS)', 'Render', 'Netlify', 'Git', 'CI/CD'],
      accent: 'from-amber-400/70 to-orange-400/70',
    },
    {
      title: 'APIs & Tools',
      skills: ['Whisper', 'ElevenLabs', 'OpenAI API', 'PostgreSQL', 'MongoDB'],
      accent: 'from-sky-400/70 to-blue-400/70',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">
          Tech Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 backdrop-blur"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${group.accent}`} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-100">
                  {group.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs md:text-sm text-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}