import SectionShell from "./SectionShell";

export default function Skills() {
  const skillGroups = [
    { title: "Languages & Programming", skills: ["Python", "JavaScript/TypeScript", "SQL", "R", "SAS"] },
    { title: "Web & Software Development", skills: ["React", "FastAPI", "Node.js", "RESTful APIs", "Tailwind CSS"] },
    { title: "Data Science & ML", skills: ["TensorFlow", "scikit-learn", "pandas", "NumPy", "Streamlit", "Seaborn", "Jupyter Notebooks", "Feature Engineering"] },
    { title: "Cloud, DevOps & Deployment", skills: ["Docker", "AWS (S3, RDS)", "Render", "Netlify", "Git", "CI/CD"] },
    { title: "APIs & Tools", skills: ["Whisper", "ElevenLabs", "OpenAI API", "PostgreSQL", "MongoDB"] },
  ];

  return (
    <SectionShell id="skills" title="Tech Skills">
      <div className="grid gap-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-slate-900/90">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}